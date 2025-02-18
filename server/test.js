const mongoose = require("mongoose");
const UserModel = require("./models/Users"); // Adjust path to match your project structure

mongoose.connect("mongodb://localhost:27017/schoolDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function checkUser(userid) {
    const user = await UserModel.findOne({ userid });
    console.log(user);
    mongoose.connection.close(); // Close connection after checking
}

checkUser("F2222"); // Replace with an actual userid
