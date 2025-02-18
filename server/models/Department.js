const mongoose = require('mongoose')

const DepartmentsSchema = new mongoose.Schema({
    department_code: String,
    department_name: String,
    dean: String,
    contact_email: String,
    contact_phone: String,
})

const DepartmentsModel = mongoose.model("departments", DepartmentsSchema)
module.exports = DepartmentsModel