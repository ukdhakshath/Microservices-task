const express = require("express");
const router = express.Router();

const {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern
} = require("../controllers/intern.controller");

router.post("/interns", createIntern);
router.get("/interns", getInterns);
router.get("/interns/:id", getInternById);
router.put("/interns/:id", updateIntern);
router.delete("/interns/:id", deleteIntern);

module.exports = router;