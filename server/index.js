const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const session = require("express-session"); 
const bcrypt = require('bcryptjs');
const MongoStore = require("connect-mongo");
const UserModel = require('./models/Users');
const SubjectModel = require('./models/Subjects')
const DepartmentModel = require('./models/Department')
const ProgramModel = require('./models/Programs')
const FacultyModel = require('./models/FacultyUsers')
const CashierModel = require('./models/CashierUsers')
const StudentModel = require('./models/StudentUsers');
const logger = require("./logger");

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
        const newUser = await UserModel.create({ userid: studentid, password: "defaultpassword", role: "Student" });
        const newStudent = await StudentModel.create({ studentid, fname, lname, phone, emailadd,
            birthday, address, course, year, section });
        logger.info(`New Student created: ${studentid}`);
        res.status(201).json({ message: "Student registered successfully", newUser, newStudent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/cashier', async (req, res) => {
    const { cashierid, fname, lname, phone, emailadd, birthday, address, password } = req.body;

    try {
        const newUser = await UserModel.create({ userid: cashierid, role: "Cashier", password: password });
        const newCashier = await CashierModel.create({ cashierid, fname, lname, phone, emailadd, birthday, address });
        logger.info(`New Cashier created: ${cashierid}`);
        res.status(201).json({ message: "Cashier registered successfully", newUser, newCashier });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/faculty', async (req, res) => {
    const { facultyid, fname, lname, phone, emailadd, password, birthday, address } = req.body;

    try {
        const newUser = await UserModel.create({ userid: facultyid, role: "Faculty", password: password });
        const newFaculty = await FacultyModel.create({ facultyid, fname, lname, phone, emailadd, birthday, address });
        logger.info(`New Faculty Member created: ${facultyid}`);
        res.status(201).json({ message: "Faculty registered successfully", newUser, newFaculty });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//***********//

app.post('/post_subjects', async (req, res) => {
    logger.info("asdsa", req.body);
    const { subjectcode, subjectname, units, semester, yearlevel, day, startTime, endTime, faculty } = req.body;

    try {
        const newSubject = await SubjectModel.create({ subjectcode, subjectname, units, semester, yearlevel, day, startTime, endTime, faculty });
        logger.info(`New Subject created: ${newSubject}`);
        res.status(201).json({ message: "Subject registered successfully", newSubject });
    } catch (err) {
        res.status(500).json({ error: err.message });
        logger.info(`Error:`, err.message );
    }
});

app.post('/post_programs', async (req, res) => {
    const { program_code, program_name, duration_years, total_units, department_code } = req.body;

    try {
        const newProgram = await ProgramModel.create({ program_code, program_name, duration_years, total_units, department_code });
        logger.info(`New Program created: ${program_code}`);
        res.status(201).json({ message: "Program registered successfully", newProgram });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/post_departments', async (req, res) => {
    const { department_code, department_name, dean, contact_email, contact_phone } = req.body;

    try {
        const newDepartment = await DepartmentModel.create({ department_code, department_name, dean, contact_email, contact_phone });
        logger.info(`New Department created: ${department_code}`);
        res.status(201).json({ message: "Department registered successfully", department_code });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/users', (req, res) => {
    const { userid, password, role } = req.body;

    const userData = {
        userid,
        password, // Do not hash here
        role
    };

    UserModel.create(userData)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});


//***Catch-all routes***
app.get("/api/getstudents", async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getfaculty", async (req, res) => {
    try {
        const faculty = await FacultyModel.find(); 
        res.json(faculty);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getcashier", async (req, res) => {
    try {
        const cashier = await CashierModel.find(); 
        res.json(cashier);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getsubjects", async (req, res) => {
    try {
        const subjects = await SubjectModel.find().populate("faculty", "fname lname");
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getprograms", async (req, res) => {
    try {
        const programs = await ProgramModel.find(); // Retrieve all programs
        res.json(programs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/getdepartments", async (req, res) => {
    try {
        const departments = await DepartmentModel.find(); // Retrieve all departments
        res.json(departments);
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
        logger.info(`User logged out: ${req.body.email}`);
        res.json({ message: "Logged out" });
    });
});

app.get('/counts', async (req, res) => {
    try {
      const [students, faculty, programs, subjects] = await Promise.all([
        StudentModel.countDocuments(),
        FacultyModel.countDocuments(),
        ProgramModel.countDocuments(),
        SubjectModel.countDocuments(),
      ]);
  
      res.json({
        totalStudents: students,
        totalFaculty: faculty,
        totalPrograms: programs,
        totalSubjects: subjects,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });

//***Route Handlers for STUDENT PAGES***

app.post("/login", (req, res) => {
    const { studentid } = req.body;
    StudentModel.findOne({ studentid: studentid })
        .then((user) => {
            if (user) {
                req.session.user = { studentid: user.studentid };
                req.session.save(() => {
                    logger.info(`User logged in: ${user.studentid}`);
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
    console.log("Entered password:", req.body.password);
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
                        logger.info(`User logged in: ${user.userid}`);
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    logger.warn(`Failed login attempt for ${user.userid}`);
                    res.json({ status: "Invalid password"});
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
                        logger.info(`User logged in: ${user.userid}`);
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    logger.warn(`Failed login attempt for ${user.userid}`);
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
                        logger.info(`User logged in: ${user.userid}`);
                        res.json({ status: "Success", user: req.session.user });
                    });
                } else {
                    logger.warn(`Failed login attempt for ${user.userid}`);
                    res.json({ status: "Invalid password" });
                }
            });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

    app.get("/teachers_search", async (req, res) => {
        try {
          const faculties = await FacultyModel.find({}, "fname lname _id"); // Fetch only needed fields
          const formattedFaculties = faculties.map(faculty => ({
            _id: faculty._id,
            name: `${faculty.fname} ${faculty.lname}`, // Combine first & last name
          }));
          
          res.json(formattedFaculties);
        } catch (error) {
          res.status(500).json({ message: "Error fetching teachers" });
        }
      });

      app.put("/api/updatesubject/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const updatedData = req.body;
    
            await SubjectModel.findByIdAndUpdate(id, updatedData, { new: true });
    
            res.json({ message: "Subject updated successfully!" });
        } catch (error) {
            console.error("Error updating subject:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    

app.listen(3001, () => {
    console.log("Server is running")
})