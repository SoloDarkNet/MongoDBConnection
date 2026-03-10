const express = require("express");
const Router = express.Router();

const {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/controller");

Router.post("/post", registerUser);
Router.get("/getuser", getUser);
Router.put("/updateUser/:id", updateUser);
Router.delete("/deleteUser/:id", deleteUser);

module.exports = Router;
