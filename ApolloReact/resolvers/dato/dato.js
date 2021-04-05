const postgRequ = require('../mutation/postgres/postgres');

module.exports = async (obj, args, context, info) => {
  const reqFromDatabase = await postgRequ(`SELECT "ID", "Name", "Info", "Description", "Child","father"
FROM public."Dato" WHERE "ID"=${args.id};`);
const reqFatherFromDatabase = await postgRequ(`SELECT "ID", "Name"
FROM public."Dato" WHERE "father"=${args.id};`)
console.log(reqFatherFromDatabase,"fatherfromdatabase")

  return {
    name: reqFromDatabase.rows[0].Name,
    info: reqFromDatabase.rows[0].Info,
    Description: reqFromDatabase.rows[0].Description,

    father: reqFromDatabase.rows[0].father,
    child:reqFatherFromDatabase.rows
    // [
    //   {ID:11,
    //   Name:"boo"},
    //   {ID:12,
    //     Name:"boos"}
    //   ]
}}