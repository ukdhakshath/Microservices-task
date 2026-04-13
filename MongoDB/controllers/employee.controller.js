const Employee = require("../models/employee.model");

// GET /employees?department=HR
exports.getEmployees = async (req, res) => {
  try {
    const filter = {};

    if (req.query.department) {
      filter.department = req.query.department;
    }

    const employees = await Employee.find(filter);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};