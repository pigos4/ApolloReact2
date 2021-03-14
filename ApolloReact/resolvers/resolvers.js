
const addUserSignUp = require('./mutation/signUpAddUser');
const dato = require('./dato/dato');
const crypto = require('./crypto/crypto');
const addInput = require('./mutation/addInput/addInput')
const login = require('./mutation/login/login')
const records = require ('./records/records.js')
const deleteItem = require ('./mutation/deleteitem/deleteitem.js')
module.exports = {
        Mutation: {
            addInput:addInput,
            addUser: addUserSignUp,
            loginUser:login,
            deleteitem: deleteItem

    }
    ,
    Query: {
        records,
        dato,
        crypto,
        test: () => [{
            "id": 1,
            "name": "Test2",
            "surname": "Test1"
        }, {
            "id": 2,
            "name": "Test2",
            "surname": "Test2"
        }]
    }
};