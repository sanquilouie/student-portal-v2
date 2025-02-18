const mongoose = require('mongoose')

const FacultysSchema = new mongoose.Schema({
    facultyid: String,
    fname: String,
    lname: String,
    phone: String,
    emailadd: String,
    birthday: String,
    address: String,
})

const FacultyModel = mongoose.model("faculty", FacultysSchema)
module.exports = FacultyModel