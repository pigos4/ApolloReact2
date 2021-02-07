"use strict";

var encrypt = require('./encrypt/enchrypt');

var postgresRequest = require('./postgres/postgres.js');

module.exports = function _callee(root, args, context, info) {
  var nameEnchrypted, passwordEnchrypted, userEnchrypted, checkIfUserExist, userSavedTodatabase;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(encrypt(args.name));

        case 2:
          nameEnchrypted = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(encrypt(args.password));

        case 5:
          passwordEnchrypted = _context.sent;
          userEnchrypted = {
            name: nameEnchrypted,
            password: passwordEnchrypted,
            username: args.username
          };
          _context.next = 9;
          return regeneratorRuntime.awrap(postgresRequest("SELECT\n        username,\n        password\n    FROM public.\"Users\"\n    WHERE\n        username = '".concat(args.username, "'")));

        case 9:
          checkIfUserExist = _context.sent;

          if (!checkIfUserExist.rows[0]) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", {
            response: "error change username"
          });

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(postgresRequest("INSERT INTO public.\"Users\"(\n        username, password, name) VALUES (\n            '".concat(userEnchrypted.username, "', '").concat(userEnchrypted.password, "', '").concat(userEnchrypted.name, "') RETURNING \"ID\";")));

        case 16:
          userSavedTodatabase = _context.sent;
          return _context.abrupt("return", userSavedTodatabase.rows[0] ? {
            response: "added"
          } : {
            response: "error"
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
};