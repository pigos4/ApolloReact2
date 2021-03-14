const encrypt = require('../encrypt/enchrypt');
const postgresRequest = require('../postgres/postgres');


module.exports = async (root, args, context, info) => {


    let inputEnchrypted = {
        name: await encrypt(args.name),
        price: await encrypt(args.price),
        barcode: await encrypt(args.barcode)
    }
    const inputToDatabase = await postgresRequest(`INSERT INTO public."Inputrecords"(
	name, barcode, price)
	VALUES ( '${inputEnchrypted.name}', '${inputEnchrypted.barcode}', '${inputEnchrypted.price}')RETURNING "id";`);
    return ((inputToDatabase.rows[0]) ? {
        response: "added"
    } : {
        response: "error"
    })
};