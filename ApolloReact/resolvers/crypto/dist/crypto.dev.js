"use strict";

var axios = require("axios");

module.exports = function _callee(obj, args, context, info) {
  var res, x;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(args);
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://api.nomics.com/v1/prices?key=" + "ace1595440db2cffec0b4f0866e20991"));

        case 3:
          res = _context.sent;
          x = res.data.filter(function (obj) {
            return obj.currency === args.symb;
          });
          console.log(x[0].currency, x[0].price);
          return _context.abrupt("return", {
            name: x[0].currency,
            value: x[0].price
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};