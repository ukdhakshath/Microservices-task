const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    age: {
      type: Number,
      min: 18
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department"
    },
    skills: [String],
    isActive: {
      type: Boolean,
      default: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

// INDEX
internSchema.index({ email: 1 });

module.exports = mongoose.model("Intern", internSchema);