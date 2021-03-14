const CryptoJS = require("crypto-js");
module.exports = function crypt(data, dataToEnchrypt) {
    if (data !== undefined) return CryptoJS.AES.encrypt(JSON.stringify(data), 'wee').toString();
    if (dataToEnchrypt) {
        const bytes = CryptoJS.AES.decrypt(dataToEnchrypt, 'wee');
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}