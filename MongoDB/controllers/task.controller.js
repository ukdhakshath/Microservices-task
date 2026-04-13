const Task = require("../models/task.model");
const asyncHandler = require("../utils/asyncHandler");

// CREATE
exports.createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// GET ALL (populate + non-deleted)
exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ isDeleted: false })
    .populate("assignedTo", "name email");
  res.json(tasks);
});

// UPDATE STATUS
exports.updateTaskStatus = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );
  res.json(task);
});

// AGGREGATION
exports.taskStatusCount = asyncHandler(async (req, res) => {
  const result = await Task.aggregate([
    { $match: { isDeleted: false } },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 }
      }
    }
  ]);
  res.json(result);
});