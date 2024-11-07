module.exports = (err, req, res, next) => {
  console.log(err);

  res.json({
    status: "error",
    message: err,
  });
};
