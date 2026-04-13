const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  internId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intern"
  },
  date: {
    type: Date
  },
  status: {
    type: String,
    enum: ["Present", "Absent"] // Advanced (prevent invalid values)
  }
});

module.exports = mongoose.model("Attendance", attendanceSchema);