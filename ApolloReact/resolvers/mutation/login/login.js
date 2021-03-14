const postgresRequest = require("../postgres/postgres.js");
const encrypt = require("../encrypt/enchrypt");

module.exports = async (root, args, context, info) => {
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
      status: "error",
    };
  } else if (userSavedTodatabase.rows[0]) {
    let pswDecrypted = encrypt(undefined, userSavedTodatabase.rows[0].password);
    if (pswDecrypted === args.password) {
      return {
        id: userSavedTodatabase.rows[0].id,
        username: userSavedTodatabase.rows[0].username,
        status: "Logged",
      };
    } else {
      return {
        id: "",
        username: "",
        status: "Username or password wrong",
      };

    }
  }
};
