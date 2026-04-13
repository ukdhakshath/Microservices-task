const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    budget: {
      type: Number
    },
    team: {
      type: String
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Completed"], // Intermediate
      default: "Active"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);