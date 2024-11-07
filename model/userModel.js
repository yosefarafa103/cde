const { Schema, model } = require("mongoose");

const userSchema = Schema({
  username: {
    type: String,
    default: "king1234",
  },
  password: {
    type: String,
    default: "100200",
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
