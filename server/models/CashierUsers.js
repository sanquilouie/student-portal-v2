const mongoose = require('mongoose')

const CashiersSchema = new mongoose.Schema({
    cashierid: String,
    fname: String,
    lname: String,
    phone: String,
    emailadd: String,
    birthday: String,
    address: String,
})

const CashierModel = mongoose.model("cashier", CashiersSchema)
module.exports = CashierModel