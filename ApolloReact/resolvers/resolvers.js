const mongo = require('./mongo/mongodb');
const addUserSignUp = require('./mutation/signUpAddUser')
const encrypt = require('./encrypt/enchrypt');
const dato = require('./dato/dato');
const crypto = require('./crypto/crypto');
const postgresRequest = require('./postgres/postgres.js');
module.exports = {
        Mutation: {
            addUser: addUserSignUp,
            loginUser: async (root, args, context, info) => {
                const userSavedTodatabase = await postgresRequest(`SELECT
                username,
                password
            FROM public."Users"
            WHERE
                username = '${args.username}' `);

                if (userSavedTodatabase.rows[0] === undefined) {
                    return {
                        id: "",
                        username: "",
                        status: "error"
                    }
                } else if (userSavedTodatabase.rows[0]) {return {
                    id: userSavedTodatabase.rows[0].id,
                    username: userSavedTodatabase.rows[0].username,
                    status: "Logged"
                }

                

            }
        }

    }
    
    // human(obj, args, context, info) {
    //     return context.db.loadHumanByID(args.id).then(
    //       userData => new Human(userData)
    //     )
    ,
    Query: {
        dato,
    //{dato(obj, args, context, info){console.log(args);return {name:"ciao"}},
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