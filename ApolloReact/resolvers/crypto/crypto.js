
const axios = require("axios");

module.exports = async (obj, args, context, info)=>{
            
    console.log(args)
    let res = await axios.get("https://api.nomics.com/v1/prices?key=" + "ace1595440db2cffec0b4f0866e20991");
  
  let x =res.data.find(x=>x.currency===args.symb.toUpperCase())
      //console.log(res[x].currency,res[x].price)
      console.log(x,"x")
      if(x===undefined){return {
        name:"error",
        value : 0}}else{
  return {
    name:x.currency,
    value : x.price
}}


}



