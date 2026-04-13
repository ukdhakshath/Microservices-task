const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,      // Basic
      unique: true,        // Intermediate
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    salary: {
      type: Number,
      required: true,
      max: 1000000         // Intermediate (test rule)
    },
    department: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);