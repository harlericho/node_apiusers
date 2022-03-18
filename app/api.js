const express = require("express");
const router = express.Router();
const apiUser = require("./routers/api/user");
router.use("/users", apiUser);

module.exports = router;
