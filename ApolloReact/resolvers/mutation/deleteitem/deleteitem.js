const postgresRequest = require('../postgres/postgres');


module.exports = async (root, args, context, info) => {

    const deletedItem = await postgresRequest(`
    DELETE FROM public."Inputrecords"
	WHERE id =${args.idd}; `);

    console.log(deletedItem.rowCount)

    if(deletedItem.rowCount===1){return {
        status:"deleted"
    }}else if (deletedItem.rowCount===0){
        return {
            status:"Error"
    }}





    console.log(args)
    return {
        status:"deleted"
    }

}