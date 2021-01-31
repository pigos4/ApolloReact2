const postgRequ = require('../postgres/postgres');

module.exports = async (obj, args, context, info) => {
const reqFromDatabase = await postgRequ(`SELECT "ID", "Name", "Info", "Description", "Child"
FROM public."Dato" WHERE "ID"=${args.name};`)
reqFromDatabase

    console.log(reqFromDatabase.row);
    return {
        name: "wee"
    }
}