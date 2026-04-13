const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTaskStatus,
  taskStatusCount
} = require("../controllers/task.controller");

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id/status", updateTaskStatus);
router.get("/tasks/status/count", taskStatusCount);

module.exports = router;