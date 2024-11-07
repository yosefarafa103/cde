"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

var dotenv = require("dotenv");

var errHandler = require("./err");

var cookieParser = require("cookie-parser");

var userRoute = require("./routes/userRoute");

var cors = require("cors");

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/", userRoute);
app.use(errHandler);
mongoose.connect(process.env.DB).then(function () {
  return console.log("connected to db");
})["catch"](function (err) {
  console.log(err);
});
app.listen(5001, function () {
  return console.log("listening to server");
});