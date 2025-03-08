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
    section: String,

    // Add schedule as an array of objects
    schedule: [
        {
        subjectName: String,
        day: String,
        startTime: String,
        endTime: String,
        teacher: String,
        },
    ],
})

const StudentModel = mongoose.model("students", StudentsSchema)
module.exports = StudentModel