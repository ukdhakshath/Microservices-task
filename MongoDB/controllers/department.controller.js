const Department = require("../models/department.model");
const asyncHandler = require("../utils/asyncHandler");

exports.createDepartment = asyncHandler(async (req, res) => {
  const dept = await Department.create(req.body);
  res.status(201).json(dept);
});