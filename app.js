const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const errHandler = require("./err");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/", userRoute);
app.use(errHandler);
mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });
app.listen(5001, () => console.log("listening to server"));
