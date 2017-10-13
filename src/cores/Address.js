import  bitcoin from 'bitcoinjs-lib';
import bs58check from 'bs58check';
class Address {
    constructor() {

    }
    getAddress(coinType, node) {
        let address = '';
        return address;
    }
    //is the same to node.getAddress()
    getBitcoinAddress(node) {
        let pubKey = node.keyPair.getPublicKeyBuffer();
        let pubKeyHash = bitcoin.crypto.hash160(pubKey);
        let payload = new Buffer(21);
        payload.writeUInt8(node.keyPair.network.pubKeyHash, 0);
        pubKeyHash.copy(payload, 1);
        let address = bs58check.encode(payload);
        return address;
    }
    getEthererumAddress(node) {
        let ethKeyPair = node.keyPair;
        let prevCompressed = ethKeyPair.compressed;
        ethKeyPair.compressed = false;
        let ethKeyPairPublicKey = ethKeyPair.getPublicKeyBuffer();
        let pubKeyHexEth = ethKeyPairPublicKey.toString('hex').slice(2);
        let pubKeyWordArrayEth = CryptoJS.enc.Hex.parse(pubKeyHexEth);
        let hashEth = CryptoJS.SHA3(pubKeyWordArrayEth, { outputLength: 256 });
        let addressEth = hashEth.toString(CryptoJS.enc.Hex).slice(24);
        ethKeyPair.compressed = prevCompressed;

        return '0x' + addressEth;
    }

}
export { Address }
