import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
// import { NewWalletPage } from '../pages/indexWallet/newWallet/newWallet';
// import { BackupWalletPage } from '../pages/indexWallet/backupWallet/backupWallet';
// import { HelpWordPage } from '../pages/indexWallet/helpWord/helpWord';
// import { WarningWordPage } from '../pages/indexWallet/warningWord/warningWord';
// import { InputMnemonicWordPage } from '../pages/indexWallet/inputMnemonicWord/inputMnemonicWord';
// import { AddAssetsPage } from "../pages/addAssets/addAssets";
// import { CnyDetailPage } from "../pages/cnyDetail/cnyDetail";
import { WalletSendPage } from "../pages/walletSend/walletSend";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WalletSendPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
