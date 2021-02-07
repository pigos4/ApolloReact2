const encrypt = require('../encrypt/enchrypt');
const postgresRequest = require('../postgres/postgres');


module.exports = async (root, args, context, info) => {console.log(args); 


    let inputEnchrypted = {
        name:await encrypt(args.name),
        price: await encrypt(args.price),
        barcode: await encrypt(args.barcode)}
console.log(inputEnchrypted)
const inputToDatabase = await postgresRequest(`INSERT INTO public."Inputrecords"(
	name, barcode, price)
	VALUES ( '${inputEnchrypted.name}', '${inputEnchrypted.barcode}', '${inputEnchrypted.price}')RETURNING "id";`);
        //console.log(userSavedTodatabase,"result from postgresresolver")
        console.log(inputToDatabase)
        return((inputToDatabase.rows[0])?{response:"added"}:{response:"error"})};
        // INSERT INTO public."Inputrecords"(
        //     name, barcode, price)
        //    VALUES ( 'ss', 'ss', 'dd');