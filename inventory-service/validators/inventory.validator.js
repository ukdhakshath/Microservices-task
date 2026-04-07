const { body, validationResult } = require("express-validator");

exports.createValidator = [
    body("product").notEmpty().withMessage("Product required"),
    body("quantity").isInt({ min: 0 }).withMessage("Invalid quantity"),
    body("storeId").isInt().withMessage("StoreId must be number"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];