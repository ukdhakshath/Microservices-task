const User = require("../models/user.model");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = new User({ name, email });
    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      data: savedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};