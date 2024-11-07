const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return next("cant not found user");
  }
  const isCorrectPassword = password === user.password;
  console.log();
  if (!isCorrectPassword) {
    return next("No Matched Password, try another password...");
  }
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 1000,
  });
  res.cookie("jwt", token, {
    maxAge: 86400,
    httpOnly: true,
  });

  console.log(req.cookies.jwt);
  res.status(200).json({ username, token });
};
exports.signin = async (req, res, next) => {
  // const { username, password } = req.body;
  try {
    const nUser = await User.create(req.body);
    console.log(nUser);
    res.json(nUser);
  } catch (err) {
    return next(err);
  }
};
