const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");

router.get("/", user.getAllUser);
router.get("/:id", user.getUserById);
router.post("/", user.postUser);
router.put("/:id", user.putUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
