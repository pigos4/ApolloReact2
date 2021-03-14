"use strict";

var encrypt = require('../mutation/encrypt/enchrypt');

var postgresRequest = require('../mutation/postgres/postgres');

module.exports = function _callee() {
  var allRecordsFromDatabase, objectDecrypted;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          objectDecrypted = function _ref(obje) {
            return obje.map(function (x) {
              if (x.id === 2) {
                return {
                  name: x.name,
                  price: x.price,
                  barcode: x.barcode,
                  id: x.id
                };
              }

              var id = x.id;
              var nome = encrypt(undefined, x.name);
              var price = encrypt(undefined, x.price);
              var barcode = encrypt(undefined, x.barcode);
              console.log({
                nome: nome,
                price: price,
                barcode: barcode,
                id: id
              });
              return {
                nome: nome,
                price: price,
                barcode: barcode,
                id: id
              };
            });
          };

          _context.next = 3;
          return regeneratorRuntime.awrap(postgresRequest("SELECT id, name, barcode, price\nFROM public.\"Inputrecords\";"));

        case 3:
          allRecordsFromDatabase = _context.sent;
          return _context.abrupt("return", objectDecrypted(allRecordsFromDatabase.rows));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; 