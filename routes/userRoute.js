const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { login, signin } = require("../controller/authUser");
router.use((req, res, next) => {
  //   const isValidToken = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(req.cookies);
  next();
});
router.route("/login").post(login);
router.route("/signin").post(signin);

module.exports = router;
