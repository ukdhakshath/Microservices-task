const express = require("express");
const router = express.Router();

const controller = require("../controllers/inventory.controller");
const validator = require("../validators/inventory.validator");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validator.createValidator, controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;