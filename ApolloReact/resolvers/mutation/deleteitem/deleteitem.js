const postgresRequest = require('../postgres/postgres');


module.exports = async (root, args, context, info) => {

    const deletedItem = await postgresRequest(`
    DELETE FROM public."Inputrecords"
	WHERE id =${args.idd}; `);


    if (deletedItem.rowCount === 1) {
        return {
            status: "deleted"
        }
    } else if (deletedItem.rowCount === 0) {
        return {
            status: "Error"
        }
    }





    return {
        status: "deleted"
    }

}