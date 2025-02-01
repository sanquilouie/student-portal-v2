const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const session = require("express-session");  // Import session
const MongoStore = require("connect-mongo"); // Import connect-mongo
const StudentModel = require('./models/StudentUsers')

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

app.post('/students', (req, res) => {
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

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


app.get("/home", (req, res) => {
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
    req.session.destroy()
    res.json("Logged out")
})

app.listen(3001, () => {
    console.log("Server is running")
})