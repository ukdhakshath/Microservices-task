const express = require("express");
const router = express.Router();

const {
  getEmployees
} = require("../controllers/employee.controller");

router.get("/employees", getEmployees); // ?department=HR

module.exports = router;