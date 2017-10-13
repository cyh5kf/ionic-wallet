import CryptoJS from 'crypto-js';
const encryptOptions = {
    iv: CryptoJS.enc.Utf8.parse('1231231231231231'),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
}
class Encrypt {
    constructor() {

    }
    encrypt(text, psw) {
        //turn it to 32 bytes
        let psw32 = CryptoJS.MD5(psw);
        let key = CryptoJS.enc.Utf8.parse(psw32);
        let utf8Text = CryptoJS.enc.Utf8.parse(text);
        let encrypted = CryptoJS.AES.encrypt(utf8Text, key, encryptOptions);
        //encrypted  is object,encrypted.toString() is base64 formate
        return encrypted.ciphertext.toString();
    }
    decrypt(encryptedText, psw) {
        let psw32 = CryptoJS.MD5(psw);
        let key = CryptoJS.enc.Utf8.parse(psw32);
        let hexText = CryptoJS.enc.Hex.parse(encryptedText);
        let base64Text = CryptoJS.enc.Base64.stringify(hexText);
        let decrypted = CryptoJS.AES.decrypt(base64Text, key, encryptOptions);
        //unencrypted text
        let decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();

    }

}
export { Encrypt };
