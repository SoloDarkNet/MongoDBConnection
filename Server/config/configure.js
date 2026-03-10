const mongoose = require("mongoose");
const mongoDB_Url =
  "mongodb+srv://solomon-55:solomon12345@cluster0.j4shurd.mongodb.net/mydb?retryWrites=true&w=majority";

const ConnectDB = async () => {
  try {
    await mongoose.connect(mongoDB_Url);
    console.log("Solomon MongoDB Connect Ayirichu!!!!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = ConnectDB;
