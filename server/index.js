const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./models/StudentUsers')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/schoolDB")

app.post('/students', (req, res) => {
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {studentid} = req.body;
    StudentModel.findOne({studentid: studentid})
    .then(user => {
        if(user){
            if(user.studentid === studentid){
                res.json('Success')
            }else{
                res.json('Incorrect Student ID')
            }
        }else{
            res.json('No record existed')
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running")
})