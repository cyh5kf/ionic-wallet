import bip39 from 'bip39';

class Seed {
    constructor(options = {}) {
        this._mnemonic = '';
        this._strength = options.strength || 128;
        this._wordlist = bip39.wordlists[options.wordlist || 'chinese_simplified'];
    }
    generateMnemonic() {
        this._mnemonic = bip39.generateMnemonic(this._strength, undefined, this._wordlist);
        console.log(this._mnemonic);
    }
    getMnemonic() {
        return this._mnemonic;
    }
    setMnemonic(mnemonic = '') {
        this._mnemonic = mnemonic;
    }
    getEntropyMnemonic(psw = '') {
        return
    }
    getSeedHex(passphrase = '') {
        return bip39.mnemonicToSeedHex(this._mnemonic, passphrase);
    }
    clear() {
        this._mnemonic = '';
    }
}
export { Seed };
