"use strict";

var encrypt = require('../encrypt/enchrypt');

var postgresRequest = require('../postgres/postgres');

module.exports = function _callee(root, args, context, info) {
  var inputEnchrypted, inputToDatabase;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(args);
          _context.next = 3;
          return regeneratorRuntime.awrap(encrypt(args.name));

        case 3:
          _context.t0 = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(encrypt(args.price));

        case 6:
          _context.t1 = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(encrypt(args.barcode));

        case 9:
          _context.t2 = _context.sent;
          inputEnchrypted = {
            name: _context.t0,
            price: _context.t1,
            barcode: _context.t2
          };
          console.log(inputEnchrypted);
          _context.next = 14;
          return regeneratorRuntime.awrap(postgresRequest("INSERT INTO public.\"Inputrecords\"(\n\tname, barcode, price)\n\tVALUES ( '".concat(inputEnchrypted.name, "', '").concat(inputEnchrypted.barcode, "', '").concat(inputEnchrypted.price, "')RETURNING \"id\";")));

        case 14:
          inputToDatabase = _context.sent;
          //console.log(userSavedTodatabase,"result from postgresresolver")
          console.log(inputToDatabase);
          return _context.abrupt("return", inputToDatabase.rows[0] ? {
            response: "added"
          } : {
            response: "error"
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}; // INSERT INTO public."Inputrecords"(
//     name, barcode, price)
//    VALUES ( 'ss', 'ss', 'dd');