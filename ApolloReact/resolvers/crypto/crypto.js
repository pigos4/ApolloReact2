
const axios = require("axios");

module.exports = async (obj, args, context, info)=>{
            
    console.log(args)
    let res = await axios.get("https://api.nomics.com/v1/prices?key=" + "ace1595440db2cffec0b4f0866e20991");

  let x =res.data.filter(obj=>obj.currency===args.symb)
      console.log(x[0].currency,x[0].price)
  return {
    name:x[0].currency,
    value : x[0].price
}


}



