const { body } = require("express-validator");

exports.createProjectValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("status")
    .isIn(["active", "completed"])
    .withMessage("Invalid status")
];