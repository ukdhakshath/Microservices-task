const Intern = require("../models/intern.model");
const asyncHandler = require("../utils/asyncHandler");

// POST
exports.createIntern = asyncHandler(async (req, res) => {
  const intern = await Intern.create(req.body);
  res.status(201).json(intern);
});

// GET ALL (with populate + non-deleted)
exports.getInterns = asyncHandler(async (req, res) => {
  const interns = await Intern.find({ isDeleted: false })
    .populate("departmentId", "name");
  res.json(interns);
});

// GET ONE
exports.getInternById = asyncHandler(async (req, res) => {
  const intern = await Intern.findById(req.params.id)
    .populate("departmentId", "name");

  if (!intern) return res.status(404).json({ message: "Not found" });

  res.json(intern);
});

// UPDATE
exports.updateIntern = asyncHandler(async (req, res) => {
  const intern = await Intern.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.json(intern);
});

// SOFT DELETE
exports.deleteIntern = asyncHandler(async (req, res) => {
  await Intern.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.json({ message: "Intern deleted" });
});