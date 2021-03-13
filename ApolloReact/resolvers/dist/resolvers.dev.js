"use strict";

var mongo = require('./mongo/mongodb');

var addUserSignUp = require('./mutation/signUpAddUser');

var dato = require('./dato/dato');

var crypto = require('./crypto/crypto');

var addInput = require('./mutation/addInput/addInput');

var login = require('./mutation/login/login');

var records = require('./records/records.js');

module.exports = {
  Mutation: {
    addInput: addInput,
    addUser: addUserSignUp,
    loginUser: login
  },
  Query: {
    records: records,
    dato: dato,
    crypto: crypto,
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