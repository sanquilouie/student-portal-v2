const mongoose = require('mongoose')

const StudentsSchema = new mongoose.Schema({
    studentid: String,
    fname: String,
    lname: String,
    phone: String,
    emailadd: String,
    birthday: String,
    address: String,
    course: String,
    year: String,
    section: String
})

const StudentModel = mongoose.model("students", StudentsSchema)
module.exports = StudentModel