import { Keys } from '../cores/Keys';
import { Seed } from '../cores/Seed';

class Wallet {
  private _keys: any;
  private _seed: any;
  private _isImported: boolean;
  constructor() {
    this._seed = new Seed();
    console.log(this._seed);
  }
  init() {

    this._seed.generateMnemonic();
    this._isImported = false;
    this.generateKeys();
  }
  initWithMnemonic(mnemonic: string) {

    this._seed.setMnemonic(mnemonic);
    this._isImported = true;
    this.generateKeys();

  }
  generateKeys() {
    //各级私钥生成API
    this._keys = new Keys({
      seedHex: this._seed.getSeedHex(),
      network: false
    });
    this._keys.generateKeys();
  }


  /*  get seed() {
      return this._seed;
    }
    set seed(value: any) {
      this._seed = value;
    }
    get keys() {
      return this._keys;
    }
    set keys(value: any) {
      this._keys = value;
    }*/
};
export {Wallet}
