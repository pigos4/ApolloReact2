const postgRequ = require('../postgres/postgres');

module.exports = async (obj, args, context, info) => {
    console.log(args.id)
const reqFromDatabase = await postgRequ(`SELECT "ID", "Name", "Info", "Description", "Child"
FROM public."Dato" WHERE "ID"=${args.id};`)


    console.log(reqFromDatabase.rows[0]);
    return {
  name: reqFromDatabase.rows[0].Name,
  info: reqFromDatabase.rows[0].Info,
  Description: reqFromDatabase.rows[0].Description
    }
}