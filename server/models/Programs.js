const mongoose = require('mongoose')

const ProgramsSchema = new mongoose.Schema({
    program_code: String,
    program_name: String,
    duration_years: String,
    total_units: String,
    department_code: String
})

const ProgramsModel = mongoose.model("programs", ProgramsSchema)
module.exports = ProgramsModel