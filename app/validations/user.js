const { check } = require("express-validator");
const { validateHelper } = require("../helpers/validateHelper");

const validateUser = [
  check("name")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be between 3 and 100 characters"),
  check("email")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),
  check("rol")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Rol is required")
    .isLength({ min: 4, max: 50 })
    .withMessage("Rol must be between 4 and 50 characters"),

  (req, res, next) => validateHelper(req, res, next),
];

module.exports = {
  validateUser,
};
