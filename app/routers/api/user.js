const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
const { validateUser } = require("../../validations/user");
router.get("/", user.getAllUser);
router.get("/:id", user.getUserById);
router.post("/", validateUser, user.postUser);
router.put("/:id", validateUser, user.putUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
