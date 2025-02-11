const mongoose = require('mongoose')

const SubjectsSchema = new mongoose.Schema({
    subjectcode: String,
    subjectname: String,
    units: String,
    semester: String,
    yearlevel: String
})

const SubjectsModel = mongoose.model("subjects", SubjectsSchema)
module.exports = SubjectsModel