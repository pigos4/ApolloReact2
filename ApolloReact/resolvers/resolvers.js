const mongo = require('./mongo/mongodb');
const addUserSignUp = require('./mutation/signUpAddUser');
const dato = require('./dato/dato');
const crypto = require('./crypto/crypto');
const addInput = require('./mutation/addInput/addInput')
const login = require('./mutation/login/login')
const records = require ('./records/records.js')
module.exports = {
        Mutation: {
            addInput:addInput,
            addUser: addUserSignUp,
            loginUser:login 

    }
    ,
    Query: {
        records,
        dato,
        crypto,
        ciao: () => [{
            "id": 1,
            "nome": "Daniel",
            "cognome": "piga"
        }, {
            "id": 2,
            "nome": "jack",
            "cognome": "boo"
        }]
    }
};