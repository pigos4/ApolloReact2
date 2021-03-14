const axios = require("axios");

module.exports = async (obj, args, context, info) => {


  let res = await axios.get("https://api.nomics.com/v1/prices?key=" + "ace1595440db2cffec0b4f0866e20991");

  let data = res.data.find(data => data.currency === args.symb.toUpperCase())

  if (data === undefined) {
    return {
      name: "error",
      value: 0
    }
  } else {
    return {
      name: data.currency,
      value: data.price
    }
  }


}