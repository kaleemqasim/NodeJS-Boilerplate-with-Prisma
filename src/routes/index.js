const express = require("express");
const router = express.Router();
const posts = require("./posts.js");
const users = require("./users.js");

router.use("/posts", posts);
router.use("/users", users);

module.exports = router;
