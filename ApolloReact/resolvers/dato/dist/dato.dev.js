"use strict";

var postgRequ = require('../mutation/postgres/postgres');

module.exports = function _callee(obj, args, context, info) {
  var reqFromDatabase;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(postgRequ("SELECT \"ID\", \"Name\", \"Info\", \"Description\", \"Child\"\nFROM public.\"Dato\" WHERE \"ID\"=".concat(args.id, ";")));

        case 2:
          reqFromDatabase = _context.sent;
          return _context.abrupt("return", {
            name: reqFromDatabase.rows[0].Name,
            info: reqFromDatabase.rows[0].Info,
            Description: reqFromDatabase.rows[0].Description
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};