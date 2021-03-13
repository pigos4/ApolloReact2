const encrypt = require('../mutation/encrypt/enchrypt');
const postgresRequest = require('../mutation/postgres/postgres');



module.exports = async () => {

    const allRecordsFromDatabase = await postgresRequest(`SELECT id, name, barcode, price
FROM public."Inputrecords";`);

    function objectDecrypted(obje) {

        return obje.map((x) => {
            if (x.id===2) {
                return {
                    name: x.name,
                    price: x.price,
                    barcode: x.barcode,
                    id: x.id,
                }
            }
            let id = x.id
            let nome = encrypt(undefined, x.name)
            let price = encrypt(undefined, x.price)
            let barcode = encrypt(undefined, x.barcode);
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
    //console.log(dec);
    // return [{
    //     nome:"we",
    //     price:123,
    //     barcode:"121",
    //     id:12,
    // }]
}


// let row =await allRecordsFromDatabase.rows.map(async (e) => { return await objectDecrypted(e.name,e.price,e.barcode).then(x=>{return x})

// }); 
//    return [{name:"1",price:123,barcode:"ssxs"}]}










//  allRecordsFromDatabase.rows.map(x=>
//     console.log(encrypt(undefined,x.price))

//     )
//let decryptedFromDatabase=await allRecordsFromDatabase.rows.map(x=>{return {price:encrypt(undefined, x.price)}});
//     {
//     decryptedFromDatabase.push({id:x.id,
//         name: await encrypt(undefined,x.name),
//         barcode: encrypt(undefined,x.barcode),

//         price: encrypt(undefined,x.price)
//     })


// }

//console.log(await decryptedFromDatabase,"decripted from database")

// [{
//     nome:"we",
//     id:"ee",
//     barcode:"we",
//     price:123

// }]