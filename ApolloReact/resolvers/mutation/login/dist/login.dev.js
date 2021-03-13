"use strict";

var postgresRequest = require("../postgres/postgres.js");

var encrypt = require("../encrypt/enchrypt");

module.exports = function _callee(root, args, context, info) {
  var userSavedTodatabase, pswDecrypted;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(postgresRequest("SELECT\n    username,\n    password\nFROM public.\"Users\"\nWHERE\n    username = '".concat(args.username, "' ")));

        case 2:
          userSavedTodatabase = _context.sent;

          if (!(userSavedTodatabase.rows[0] === undefined)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            id: "",
            username: "",
            status: "error"
          });

        case 7:
          if (!userSavedTodatabase.rows[0]) {
            _context.next = 16;
            break;
          }

          console.log(args.password);
          pswDecrypted = encrypt(undefined, userSavedTodatabase.rows[0].password);

          if (!(pswDecrypted === args.password)) {
            _context.next = 15;
            break;
          }

          console.log("password giusta");
          return _context.abrupt("return", {
            id: userSavedTodatabase.rows[0].id,
            username: userSavedTodatabase.rows[0].username,
            status: "Logged"
          });

        case 15:
          return _context.abrupt("return", {
            id: "",
            username: "",
            status: "Username or password wrong"
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};