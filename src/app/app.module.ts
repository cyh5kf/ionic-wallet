import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';



import { MyApp } from './app.component';

import { MarketPage } from '../pages/market/market';
import { SettingsPage } from '../pages/settings/settings';
import { SideMenusPage } from '../pages/sidemenus/sidemenus';
import { TabsPage } from '../pages/tabs/tabs';
import { NewWalletPage } from '../pages/indexWallet/newWallet/newWallet';
import { BackupWalletPage } from '../pages/indexWallet/backupWallet/backupWallet';
import { HelpWordPage } from '../pages/indexWallet/helpWord/helpWord';
import { WarningWordPage } from '../pages/indexWallet/warningWord/warningWord';
import { InputMnemonicWordPage } from '../pages/indexWallet/inputMnemonicWord/inputMnemonicWord';
import { WalletPage } from "../pages/wallet/wallet";
import { AddAssetsPage } from "../pages/addAssets/addAssets";
import { CnyDetailPage } from "../pages/cnyDetail/cnyDetail";
import { WalletSendPage } from "../pages/walletSend/walletSend";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MarketPage,
    SettingsPage,
    SideMenusPage,
    TabsPage,
    NewWalletPage,
    BackupWalletPage,
    HelpWordPage,
    WarningWordPage,
    InputMnemonicWordPage,
    WalletPage,
    AddAssetsPage,
    CnyDetailPage,
    WalletSendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
/*    RouterModule.forRoot([{
      path: 'heroes',
      component: HeroesComponent
    }])*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MarketPage,
    SettingsPage,
    SideMenusPage,
    TabsPage,
    NewWalletPage,
    BackupWalletPage,
    HelpWordPage,
    WarningWordPage,
    InputMnemonicWordPage,
    WalletPage,
    AddAssetsPage,
    CnyDetailPage,
    WalletSendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {

}
