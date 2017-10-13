import  bitcoin from 'bitcoinjs-lib';
import  bs58check from 'bs58check';
import  CryptoJS from 'crypto-js';
import { Address } from './Address';

import config from './Config';
const M = 'm/';
const UNISIG_ROOTPATH = 44;
const MULTISIG_ROOTPATH = 48;
const LIVENET_PATH = 0;
const TESTNET_PATH = 1;
/*
options:seedHex
 */
class Keys {
    constructor(options) {
        this._KeyMap = {};
        this._config = config;
        this._seedHex = options.seedHex;
        this._network = options.network;
        /*this._network = config[coinType].network;*/
        this._pathPrefix = M + UNISIG_ROOTPATH + "'/";
        this._accountNum = "'/0'";
    }
    getKeyMap() {
        return this._KeyMap;
    }
    //follow bip-44
    generateKeys() {
        console.log('start key generate')
        let rootNode = bitcoin.HDNode.fromSeedHex(this._seedHex);
        let rootNodeXprv = rootNode.toBase58();
        this.rootNodeXpub = rootNode.neutered().toBase58();
        for (let coin of Object.values(config)) {
            let coinType = coin.pouch.coinHDType;
            //exclude token
            if (coin.pouch.coinIsTokenSubtype) {
                continue;
            }
            if (coinType == undefined) {
                continue;
            }

            //m/44'/coinType'/account'/
            let accountPath = this._pathPrefix + coinType + this._accountNum;
            let accountNode = rootNode.derivePath(accountPath);
            let accountNodeXprv = accountNode.toBase58();
            let accountNodeXpub = accountNode.neutered().toBase58()
            //m/44'/coinType'/account'/0
            let receiveNode = accountNode.derive(0, false);
            let receiveNodeXprv = receiveNode.toBase58();
            let receiveNodeXpub = receiveNode.neutered().toBase58();
            //m/44'/coinType'/account'/1
            let changeNode = accountNode.derive(1, false);
            let changeNodeXprv = changeNode.toBase58();
            let changeNodeXpub = changeNode.neutered().toBase58();
            //m/44'/coinType'/account'/0/0  external
            let currentReceiveAddressNode = receiveNode.derive(0, false);
            let currentReceiveAddressNodeXprv = currentReceiveAddressNode.toBase58();
            let currentReceiveAddressNodeXpub = currentReceiveAddressNode.neutered().toBase58();
            //m/44'/coinType'/account'/1/0  external
            let currentChangeAddressNode = changeNode.derive(0, false);
            let currentChangeAddressNodeXprv = currentChangeAddressNode.toBase58();
            let currentChangeAddressNodeXpub = currentChangeAddressNode.neutered().toBase58();
            //internal 1
            // console.log(this.currentReceiveAddressNode.getPublicKeyBuffer().toString('hex'));
            this._KeyMap[coinType] = {
                changeAddressNode: currentChangeAddressNode,
                changeAddressXpub: currentChangeAddressNodeXpub,
                changeAddressPub: currentChangeAddressNode.getPublicKeyBuffer().toString('hex'),
                receiveAddressNode: currentReceiveAddressNode,
                receiveAddressXpub: currentReceiveAddressNodeXpub,
                receiveAddressPub: currentReceiveAddressNode.getPublicKeyBuffer().toString('hex'),
            }

        }
    }
}
export { Keys };
