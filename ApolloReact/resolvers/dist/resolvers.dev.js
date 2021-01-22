"use strict";

var mongo = require('./mongo/mongodb');

module.exports = {
  Mutation: {
    addUser: function addUser(root, args, context, info) {
      var res;
      return regeneratorRuntime.async(function addUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = mongo("Apollo", "Users", {
                args: args
              });
              _context.next = 3;
              return regeneratorRuntime.awrap(res.then(function (x) {
                return {
                  response: x
                };
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    loginUser: function loginUser(root, args, context, info) {
      var resultFindUser;
      return regeneratorRuntime.async(function loginUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              resultFindUser = mongo("Apollo", "Users", {
                args: args
              }, "findOne");
              console.log(resultFindUser, "findOne");
              return _context2.abrupt("return", {
                id: 1,
                username: "a",
                status: "ok"
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  Query: {
    ciao: function ciao() {
      return [{
        "id": 1,
        "nome": "Daniel",
        "cognome": "piga"
      }, {
        "id": 2,
        "nome": "jack",
        "cognome": "boo"
      }];
    }
  }
};