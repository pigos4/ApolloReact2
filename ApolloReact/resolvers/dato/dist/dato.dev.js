"use strict";

var postgRequ = require('../postgres/postgres');

module.exports = function _callee(obj, args, context, info) {
  var reqFromDatabase;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(postgRequ("SELECT \"ID\", \"Name\", \"Info\", \"Description\", \"Child\"\nFROM public.\"Dato\" WHERE \"ID\"=".concat(args.name, ";")));

        case 2:
          reqFromDatabase = _context.sent;
          reqFromDatabase;
          console.log(reqFromDatabase.row);
          return _context.abrupt("return", {
            name: "wee"
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};