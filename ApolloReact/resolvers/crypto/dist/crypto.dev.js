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
          x = res.data.find(function (x) {
            return x.currency === args.symb.toUpperCase();
          }); //console.log(res[x].currency,res[x].price)

          console.log(x, "x");

          if (!(x === undefined)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", {
            name: "error",
            value: 0
          });

        case 10:
          return _context.abrupt("return", {
            name: x.currency,
            value: x.price
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};