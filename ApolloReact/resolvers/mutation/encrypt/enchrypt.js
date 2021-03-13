const CryptoJS = require("crypto-js");
//if data chrypt
//if dataToEnchrypt dechrypt
module.exports = function crypt(data, dataToEnchrypt) {
    if (data !== undefined) return CryptoJS.AES.encrypt(JSON.stringify(data), 'wee').toString();
    if (dataToEnchrypt) {
        //console.log(dataToEnchrypt)
        const bytes = CryptoJS.AES.decrypt(dataToEnchrypt, 'wee');
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}