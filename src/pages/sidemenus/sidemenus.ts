import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {WalletPage} from "../wallet/wallet";

@Component({
  selector: 'page-sidemenus',
  templateUrl: 'sidemenus.html'
})
export class SideMenusPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WalletPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Private Wallet', component: WalletPage },
      { title: "Mom's Wallet", component: WalletPage },
      { title: "Lily", component: WalletPage }
    ];
  }

  /**
   * 处理每个点击事件
   */
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

    /**
   * 打开监听
   */
  menuOpened() {
    console.log('ionOpen');
  }
  /**
   * 关闭监听
   */
  menuClosed() {
    console.log('ionClose');
  }

  ionViewDidLoad() {
    console.log('Hello WalletPage Page');
  }

}