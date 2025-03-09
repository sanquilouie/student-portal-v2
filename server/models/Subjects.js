const mongoose = require('mongoose')

const SubjectsSchema = new mongoose.Schema({
    subjectcode: String,
    subjectname: String,
    units: String,
    semester: String,
    yearlevel: String,
    day: [String],
    startTime: String,
    endTime: String,
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "faculty" }
});

const SubjectsModel = mongoose.model("subjects", SubjectsSchema)
module.exports = SubjectsModel