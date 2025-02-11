const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const session = require("express-session"); 
const bcrypt = require('bcryptjs');
const MongoStore = require("connect-mongo");
const StudentModel = require('./models/StudentUsers');
const UserModel = require('./models/Users');
const SubjectModel = require('./models/Subjects')

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

mongoose.connect("mongodb://localhost:27017/schoolDB")

app.use(
    session({
        secret: "secretsecret",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/schoolDB" }),
        cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 }
    })
)

//***Registration routes***
app.post('/students', async (req, res) => {
    const { studentid, fname, lname, phone, emailadd,
        birthday, address, course, year, section } = req.body;

    try {
        // Step 1: Create the User
        const newUser = await UserModel.create({ userid: studentid, role: "Student" });

        // Step 2: Create the Student
        const newStudent = await StudentModel.create({ studentid, fname, lname, phone, emailadd,
            birthday, address, course, year, section });

        res.status(201).json({ message: "Student registered successfully", newUser, newStudent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/post_subjects', async (req, res) => {
    const { subjectcode, subjectname, units, semester, yearlevel } = req.body;

    try {
        const newSubject = await SubjectModel.create({ subjectcode, subjectname, units, semester, yearlevel });

        res.status(201).json({ message: "Subject registered successfully", newSubject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/users', (req, res) => {
    const { userid, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: 'Error hashing password' });
        }
        const userData = {
            userid,
            password: hashedPassword,
            role
        };
        UserModel.create(userData)
            .then(users => res.json(users))
            .catch(err => res.json(err));
    });
});

//***Catch-all routes***
app.get("/api/getstudents", async (req, res) => {
    try {
        const students = await StudentModel.find(); // Retrieve all students
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getsubjects", async (req, res) => {
    try {
        const subjects = await SubjectModel.find(); // Retrieve all subjects
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/navbar", (req, res) => {
    if (req.session.user) {
        const { studentid } = req.session.user;
        StudentModel.findOne({ studentid: studentid })
            .then((user) => {
                if (user) {
                    res.json({
                        status: "Success",
                        fname: user.fname,
                        lname: user.lname,
                    });
                } else {
                    res.json({ status: "No record found for studentid" });
                }
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    } else {
        res.json({ status: "No user logged in" });
    }
});

app.get("/session", (req, res) => {
    if (req.session.user) {
        res.json({ authenticated: true, user: req.session.user })
    } else {
        res.json({ authenticated: false })
    }
})

app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to log out" });
        }
        res.json({ message: "Logged out" });
    });
});


//***Route Handlers for STUDENT PAGES***

app.post("/login", (req, res) => {
    const { studentid } = req.body;
    StudentModel.findOne({ studentid: studentid })
        .then((user) => {
            if (user) {
                req.session.user = { studentid: user.studentid };
                req.session.save(() => {
                    res.json({ status: "Success", user: req.session.user });
                });
            } else {
                res.json({ status: "No record existed" });
            }
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/prompt", (req, res) => {
    const { studentid } = req.body;
    StudentModel.findOne({ studentid: studentid })
        .then((user) => {
            if (user) {
                res.json({
                    status: "Success",
                    fname: user.fname,
                    lname: user.lname,
                });
            } else {
                res.json({ status: "No record existed" });
            }
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/studentprofile", (req, res) => {
    if (req.session.user) {
        const { studentid } = req.session.user;
        StudentModel.findOne({ studentid: studentid })
            .then((user) => {
                if (user) {
                    res.json({
                        status: "Success",
                        studentid: user.studentid,
                        fname: user.fname,
                        lname: user.lname,
                        phone: user.phone,
                        emailadd: user.emailadd,
                        birthday: user.birthday,
                        address: user.address,
                        course: user.course,
                        year: user.year,
                        section: user.section
                    });
                } else {
                    res.json({ status: "No record found for studentid" });
                }
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    } else {
        res.json({ status: "No user logged in" });
    }
});

//***Route Handlers for FACULTY PAGES***
app.post("/faculty_login", (req, res) => {
    const { userid, password } = req.body;

    UserModel.findOne({ userid })
        .then((user) => {
            if (!user) {
                return res.json({ status: "No record existed" });
            }

            if (user.role !== "Faculty") {
                return res.json({ status: "Access denied" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ error: "Error comparing passwords" });
                }

                if (isMatch) {
                    req.session.user = { userid: user.userid };
                    req.session.save(() => {
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    res.json({ status: "Invalid password" });
                }
            });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

//***Route Handlers for CASHIER PAGES***
app.post("/cashier_login", (req, res) => {
    const { userid, password } = req.body;

    UserModel.findOne({ userid })
        .then((user) => {
            if (!user) {
                return res.json({ status: "No record existed" });
            }

            if (user.role !== "Cashier") {
                return res.json({ status: "Access denied" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ error: "Error comparing passwords" });
                }

                if (isMatch) {
                    req.session.user = { userid: user.userid };
                    req.session.save(() => {
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    res.json({ status: "Invalid password" });
                }
            });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

//***Route Handlers for ADMIN PAGES***
app.post("/admin_login", (req, res) => {
    const { userid, password } = req.body;

    UserModel.findOne({ userid })
        .then((user) => {
            if (!user) {
                return res.json({ status: "No record existed" });
            }

            if (user.role !== "Admin") {
                return res.json({ status: "Access denied" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ error: "Error comparing passwords" });
                }

                if (isMatch) {
                    req.session.user = { userid: user.userid };
                    req.session.save(() => {
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    res.json({ status: "Invalid password" });
                }
            });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("Server is running")
})