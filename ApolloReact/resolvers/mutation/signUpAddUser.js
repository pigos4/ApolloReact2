const encrypt = require('../encrypt/enchrypt');
const postgresRequest = require('../postgres/postgres.js');

module.exports = async (root, args, context, info) => {
    let nameEnchrypted = await encrypt(args.name);
    let passwordEnchrypted = await encrypt(args.password);
    let userEnchrypted = {
        name: nameEnchrypted,
        password: passwordEnchrypted,
        username: args.username}
        const checkIfUserExist=await postgresRequest(`SELECT
        username,
        password
    FROM public."Users"
    WHERE
        username = '${args.username}'`);
        //console.log(checkIfUserExist.rows[0],"userexist")
        if(checkIfUserExist.rows[0]){return {response:"error change username"}}else{
    const userSavedTodatabase = await postgresRequest(`INSERT INTO public."Users"(
        username, password, name) VALUES (
            '${userEnchrypted.username}', '${userEnchrypted.password}', '${userEnchrypted.name}') RETURNING "ID";`);
            //console.log(userSavedTodatabase,"result from postgresresolver")
            return((userSavedTodatabase.rows[0])?{response:"added"}:{response:"error"})}};

