const encrypt = require('../mutation/encrypt/enchrypt');
const postgresRequest = require('../mutation/postgres/postgres');



module.exports = async () => {

    const allRecordsFromDatabase = await postgresRequest(`SELECT id, name, barcode, price
FROM public."Inputrecords";`);

    function objectDecrypted(obje) {

        return obje.map((data) => {
            if (data.id===2) {
                return {
                    name: data.name,
                    price: data.price,
                    barcode: data.barcode,
                    id: data.id,
                }
            }
            let id = data.id
            let nome = encrypt(undefined, data.name)
            let price = encrypt(undefined, data.price)
            let barcode = encrypt(undefined, data.barcode);
            console.log({
                nome,
                price,
                barcode,
                id,
            })
            return {
                nome,
                price,
                barcode,
                id,
            }
        })

      
        
    }
    return objectDecrypted(allRecordsFromDatabase.rows);


}





