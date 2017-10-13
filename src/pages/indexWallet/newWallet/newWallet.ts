import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Wallet } from '../../../modules/Wallet';
@Component({
  selector: 'page-newWallet',
  templateUrl: 'newWallet.html'
})
export class NewWalletPage {
  private _wallet: any;
  constructor(public navCtrl: NavController) {

  }
  createWallet() {
    this._wallet = new Wallet();
    this._wallet.init();
  }

}
