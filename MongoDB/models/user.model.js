const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true              // Advanced
  },
  email: {
    type: String,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  password: {
    type: String,
    minlength: 6                // Advanced
  },
  mobile: {
    type: String,
    match: [/^[6-9]\d{9}$/, "Invalid mobile number"] // Advanced (India format)
  }
});

module.exports = mongoose.model("User", userSchema);