"use strict";

var mongo = require('./mongo/mongodb');

var addUserSignUp = require('./mutation/signUpAddUser');

var encrypt = require('./encrypt/enchrypt');

var dato = require('./dato/dato');

var postgresRequest = require('./postgres/postgres.js');

module.exports = {
  Mutation: {
    addUser: addUserSignUp,
    loginUser: function loginUser(root, args, context, info) {
      var userSavedTodatabase;
      return regeneratorRuntime.async(function loginUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(postgresRequest("SELECT\n                username,\n                password\n            FROM public.\"Users\"\n            WHERE\n                username = '".concat(args.username, "' ")));

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
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", {
                id: userSavedTodatabase.rows[0].id,
                username: userSavedTodatabase.rows[0].username,
                status: "Logged"
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  } // human(obj, args, context, info) {
  //     return context.db.loadHumanByID(args.id).then(
  //       userData => new Human(userData)
  //     )
  ,
  Query: {
    dato: dato,
    //{dato(obj, args, context, info){console.log(args);return {name:"ciao"}},
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