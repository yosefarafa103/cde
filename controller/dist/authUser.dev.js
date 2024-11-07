"use strict";

var User = require("../model/userModel");

var jwt = require("jsonwebtoken");

exports.login = function _callee(req, res, next) {
  var _req$body, username, password, user, isCorrectPassword, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 3:
          user = _context.sent;

          if (user) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", next("cant not found user"));

        case 6:
          isCorrectPassword = password === user.password;
          console.log();

          if (isCorrectPassword) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", next("No Matched Password, try another password..."));

        case 10:
          token = jwt.sign({
            id: user._id
          }, process.env.TOKEN_SECRET, {
            expiresIn: 1000
          });
          res.cookie("jwt", token, {
            maxAge: 86400,
            httpOnly: true
          });
          console.log(req.cookies.jwt);
          res.status(200).json({
            username: username,
            token: token
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.signin = function _callee2(req, res, next) {
  var nUser;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.create(req.body));

        case 3:
          nUser = _context2.sent;
          console.log(nUser);
          res.json(nUser);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", next(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};