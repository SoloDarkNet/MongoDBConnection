const user = require("../model/model");

//registerUser

const registerUser = async (req, res) => {
  const { name, password, email, gender } = req.body;
  const postUser = new user({
    name,
    email,
    password,
    gender,
  });
  await postUser.save();
  res.json(postUser);
};

//getUser

const getUser = async (req, res) => {
  const getUser = await user.find();
  res.json(getUser);
};

//updateUser

const updateUser = async (req, res) => {
  const id = req.params.id;

  const updateUser = await user.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });
  res.json(updateUser);
};

//deleteUser

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const deltUser = await user.findByIdAndDelete(id);
  res.json(deltUser);
};

module.exports = { registerUser, getUser, updateUser, deleteUser };
