webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CnyDetailPage = (function () {
    function CnyDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CnyDetailPage;
}());
CnyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cnyDetail',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/cnyDetail/cnyDetail.html"*/'<ion-content padding>\n  <img src="../../assets/icon/icon_putaway_2x.png" alt="" class="btn-dropdown">\n\n  <div class="balance">\n    <div class="top">\n      <img src="../../assets/icon/icon_btc.png" alt="" class="icon-cny">\n      <span>BTC</span>\n    </div>\n    <div class="content">\n      <span class="money-num">11.0921</span>\n      <span class="equivalence">≈ 50120.76 CNY</span>\n      <div class="quotes rise-up">\n        <span class="market-price">20917.981</span>\n        <img src="../../assets/icon/icon_price_up_s_2x.png" alt="">\n        <span class="add-sub">+</span>\n        <span class="percentage">1.92%</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="receive-send">\n    <div class="left common">\n      <div class="content">\n        <img src="../../assets/icon/icon_receive_2_2x.png" alt="" class="icon-qr">\n        <span>Receive</span>\n      </div>\n    </div>\n    <div class="right common">\n      <div class="content">\n        <img src="../../assets/icon/icon_send_2x.png" alt="" class="icon-send">\n        <span>Send</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="transactions">\n    <div class="title">\n      <span class="line"></span><span style="white-space:pre">  </span>\n      <span class="txt">Transactions</span>\n      <span style="white-space:pre">  </span><span class="line"></span>\n    </div>\n    <ul>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-arrow" src="../../assets/icon/icon_send_dark_2x.png" alt="">\n        </div>\n        <div class="item-right">\n          <div class="deal-static">\n            <span class="deal-name">You are sending</span>\n            <span class="deal-num">- 0.2 <b>BTC</b></span>\n            <span class="deal-status">Confirming…</span>\n          </div>\n          <div class="time">\n            <span>3 h</span>\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-arrow" src="../../assets/icon/icon_receive_dark_2x.png" alt="">\n        </div>\n        <div class="item-right">\n          <div class="deal-static">\n            <span class="deal-name">You are sending</span>\n            <span class="deal-num">- 0.2 <b>BTC</b></span>\n            <span class="deal-status">Confirming…</span>\n          </div>\n          <div class="time">\n            <span>3 h</span>\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-arrow" src="../../assets/icon/icon_send_dark_2x.png" alt="">\n        </div>\n        <div class="item-right">\n          <div class="deal-static">\n            <span class="deal-name">You are sending</span>\n            <span class="deal-num">- 0.2 <b>BTC</b></span>\n            <span class="deal-status">Confirming…</span>\n          </div>\n          <div class="time">\n            <span>3 h</span>\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-arrow" src="../../assets/icon/icon_send_dark_2x.png" alt="">\n        </div>\n        <div class="item-right">\n          <div class="deal-static">\n            <span class="deal-name">You are sending</span>\n            <span class="deal-num">- 0.2 <b>BTC</b></span>\n            <span class="deal-status">Confirming…</span>\n          </div>\n          <div class="time">\n            <span>3 h</span>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/cnyDetail/cnyDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CnyDetailPage);

//# sourceMappingURL=cnyDetail.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarketPage = (function () {
    function MarketPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MarketPage;
}());
MarketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-market',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/market/market.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/market/market.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MarketPage);

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenusPage = (function () {
    function SideMenusPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'My Private Wallet', component: __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */] },
            { title: "Mom's Wallet", component: __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */] },
            { title: "Lily", component: __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */] }
        ];
    }
    /**
     * 处理每个点击事件
     */
    SideMenusPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    /**
   * 打开监听
   */
    SideMenusPage.prototype.menuOpened = function () {
        console.log('ionOpen');
    };
    /**
     * 关闭监听
     */
    SideMenusPage.prototype.menuClosed = function () {
        console.log('ionClose');
    };
    SideMenusPage.prototype.ionViewDidLoad = function () {
        console.log('Hello WalletPage Page');
    };
    return SideMenusPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], SideMenusPage.prototype, "nav", void 0);
SideMenusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sidemenus',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/sidemenus/sidemenus.html"*/'<ion-menu type="overlay" [content]="menuContent" side="right" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n  \n  <ion-content>\n    <ion-list>\n      <button menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <div class="button-content">\n            <div class="page-title"><img src="../../assets/icon/icon_wallet_2x.png" alt="">{{p.title}}</div>\n            <p class="number">CNY 309812.781</p>\n        </div>\n      </button>\n    </ion-list>\n\n    <div class="btn-style">\n      <img src="../../assets/icon/icon_add_l_w_2x.png" alt="">\n      <span>Create Wallet</span>\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #menuContent swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/sidemenus/sidemenus.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SideMenusPage);

//# sourceMappingURL=sidemenus.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletPage = (function () {
    function WalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('Hello wallet Page');
    };
    return WalletPage;
}());
WalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wallet',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/wallet/wallet.html"*/'<ion-content padding>\n  <div class="top">\n    <h2>My Private Wallet</h2>\n    <img src="../../assets/icon/icon_wallet_list_2x.png" alt="" menuToggle>\n  </div>\n\n  <p class="number">309,812<span class="decimal">.781</span></p>\n\n  <div class="operate-content">\n    <button class="btn-style currency">\n      <div class="currency-content">\n          <span>CNY</span>\n          <img src="../../assets/icon/icon_switchcoin_2x.png" alt="">\n      </div>\n    </button>\n    <button class="btn-style scan">\n      <div class="scan-content">\n          <img src="../../assets/icon/icon_scan_s_2x.png" alt="">\n          <span>Scan</span>\n      </div>\n    </button>\n    <button class="btn-style add-assets">\n      <div class="add-content">\n          <img src="../../assets/icon/icon_add_l_d_2x.png" alt="">\n          <span>Add Assets</span>\n      </div>\n    </button>\n  </div>\n\n  <ul class="show-detail">\n    <li>\n      <div class="content1">\n        <div class="left">\n          <img src="../../assets/icon/icon_btc.png" alt="" class="icon-currency">\n          <span class="currency-name">BTC</span>\n        </div>\n        <span class="amount">11.0921</span>\n      </div>\n      <div class="content2">\n        <span class="price riseUp"><img src="../../assets/icon/icon_price_up_s_2x.png" alt=""> 20917.981</span>\n        <span class="conversion">≈ 50120.76 CNY</span>\n      </div>\n    </li>\n    <li>\n      <div class="content1">\n        <div class="left">\n          <img src="../../assets/icon/icon_btc.png" alt="" class="icon-currency">\n          <span class="currency-name">ETH</span>\n        </div>\n        <span class="amount">11.0921</span>\n      </div>\n      <div class="content2">\n        <span class="price fallDown"><img src="../../assets/icon/icon_price_down_s_2x.png" alt=""> 20917.981</span>\n        <span class="conversion">≈ 50120.76 CNY</span>\n      </div>\n    </li>\n    <li>\n      <div class="content1">\n        <div class="left">\n          <img src="../../assets/icon/icon_btc.png" alt="" class="icon-currency">\n          <span class="currency-name">BTC</span>\n        </div>\n        <span class="amount">11.0921</span>\n      </div>\n      <div class="content2">\n        <span class="price riseUp"><img src="../../assets/icon/icon_price_up_s_2x.png" alt=""> 20917.981</span>\n        <span class="conversion">≈ 50120.76 CNY</span>\n      </div>\n    </li>\n    <li>\n      <div class="content1">\n        <div class="left">\n          <img src="../../assets/icon/icon_btc.png" alt="" class="icon-currency">\n          <span class="currency-name">ETH</span>\n        </div>\n        <span class="amount">11.0921</span>\n      </div>\n      <div class="content2">\n        <span class="price fallDown"><img src="../../assets/icon/icon_price_down_s_2x.png" alt=""> 20917.981</span>\n        <span class="conversion">≈ 50120.76 CNY</span>\n      </div>\n    </li>\n  </ul>\n\n</ion-content>\n\n<div class="menu-page" *ngIf="isShow" (click)="closeMenu($event)">\n  <div class="menu-content" [ngClass]="{\'changeWidth\': isShow}">\n\n  </div>\n</div>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/wallet/wallet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WalletPage);

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_market_market__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sidemenus_sidemenus__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_indexWallet_newWallet_newWallet__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_indexWallet_backupWallet_backupWallet__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_indexWallet_helpWord_helpWord__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_indexWallet_warningWord_warningWord__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_indexWallet_inputMnemonicWord_inputMnemonicWord__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addAssets_addAssets__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cnyDetail_cnyDetail__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_walletSend_walletSend__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sidemenus_sidemenus__["a" /* SideMenusPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_indexWallet_newWallet_newWallet__["a" /* NewWalletPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_indexWallet_backupWallet_backupWallet__["a" /* BackupWalletPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_indexWallet_helpWord_helpWord__["a" /* HelpWordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_indexWallet_warningWord_warningWord__["a" /* WarningWordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_indexWallet_inputMnemonicWord_inputMnemonicWord__["a" /* InputMnemonicWordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__["a" /* WalletPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_addAssets_addAssets__["a" /* AddAssetsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cnyDetail_cnyDetail__["a" /* CnyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_walletSend_walletSend__["a" /* WalletSendPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
            /*    RouterModule.forRoot([{
                  path: 'heroes',
                  component: HeroesComponent
                }])*/
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_market_market__["a" /* MarketPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_sidemenus_sidemenus__["a" /* SideMenusPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_indexWallet_newWallet_newWallet__["a" /* NewWalletPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_indexWallet_backupWallet_backupWallet__["a" /* BackupWalletPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_indexWallet_helpWord_helpWord__["a" /* HelpWordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_indexWallet_warningWord_warningWord__["a" /* WarningWordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_indexWallet_inputMnemonicWord_inputMnemonicWord__["a" /* InputMnemonicWordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__["a" /* WalletPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_addAssets_addAssets__["a" /* AddAssetsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cnyDetail_cnyDetail__["a" /* CnyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_walletSend_walletSend__["a" /* WalletSendPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_walletSend_walletSend__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';
// import { NewWalletPage } from '../pages/indexWallet/newWallet/newWallet';
// import { BackupWalletPage } from '../pages/indexWallet/backupWallet/backupWallet';
// import { HelpWordPage } from '../pages/indexWallet/helpWord/helpWord';
// import { WarningWordPage } from '../pages/indexWallet/warningWord/warningWord';
// import { InputMnemonicWordPage } from '../pages/indexWallet/inputMnemonicWord/inputMnemonicWord';
// import { AddAssetsPage } from "../pages/addAssets/addAssets";
// import { CnyDetailPage } from "../pages/cnyDetail/cnyDetail";

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_walletSend_walletSend__["a" /* WalletSendPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_market__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidemenus_sidemenus__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__sidemenus_sidemenus__["a" /* SideMenusPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__market_market__["a" /* MarketPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Wallet" tabIcon="tab-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Market" tabIcon="tab-market"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="tab-settings"></ion-tab>\n  <div class="cache-img">\n    <img src="../../assets/icon/tabicon_home_on_2x.png" alt="">\n    <img src="../../assets/icon/tabicon_home_off_2x.png" alt="">\n    <img src="../../assets/icon/tabicon_market_on_2x.png" alt="">\n    <img src="../../assets/icon/tabicon_market_off_2x.png" alt="">\n    <img src="../../assets/icon/tabicon_settings_on_2x.png" alt="">\n    <img src="../../assets/icon/tabicon_settings_off_2x.png" alt="">\n  </div>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Wallet__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewWalletPage = (function () {
    function NewWalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewWalletPage.prototype.createWallet = function () {
        this._wallet = new __WEBPACK_IMPORTED_MODULE_2__modules_Wallet__["a" /* Wallet */]();
        this._wallet.init();
    };
    return NewWalletPage;
}());
NewWalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newWallet',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/newWallet/newWallet.html"*/' <ion-content padding >\n  <div class="main">\n    <button ion-button class="btn-style new-wallet">New Wallet</button>\n    <button ion-button class="btn-style input-wallet">Input Wallet</button>\n    <ion-item class="checkbox-item">\n      <ion-label>I already read the <span class="bold">XXXXXXXX</span></ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n  </div>\n </ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/newWallet/newWallet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], NewWalletPage);

//# sourceMappingURL=newWallet.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cores_Keys__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cores_Seed__ = __webpack_require__(418);


var Wallet = (function () {
    function Wallet() {
        this._seed = new __WEBPACK_IMPORTED_MODULE_1__cores_Seed__["a" /* Seed */]();
        console.log(this._seed);
    }
    Wallet.prototype.init = function () {
        this._seed.generateMnemonic();
        this._isImported = false;
        this.generateKeys();
    };
    Wallet.prototype.initWithMnemonic = function (mnemonic) {
        this._seed.setMnemonic(mnemonic);
        this._isImported = true;
        this.generateKeys();
    };
    Wallet.prototype.generateKeys = function () {
        //各级私钥生成API
        this._keys = new __WEBPACK_IMPORTED_MODULE_0__cores_Keys__["a" /* Keys */]({
            seedHex: this._seed.getSeedHex(),
            network: false
        });
        this._keys.generateKeys();
    };
    return Wallet;
}());
;

//# sourceMappingURL=Wallet.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bs58check__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bs58check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bs58check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Address__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Config__ = __webpack_require__(417);






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
        this._config = __WEBPACK_IMPORTED_MODULE_4__Config__["a" /* default */];
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
        let rootNode = __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default.a.HDNode.fromSeedHex(this._seedHex);
        let rootNodeXprv = rootNode.toBase58();
        this.rootNodeXpub = rootNode.neutered().toBase58();
        for (let coin of Object.values(__WEBPACK_IMPORTED_MODULE_4__Config__["a" /* default */])) {
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



/***/ }),

/***/ 340:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export Address */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bs58check__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bs58check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bs58check__);


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
        let pubKeyHash = __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default.a.crypto.hash160(pubKey);
        let payload = new Buffer(21);
        payload.writeUInt8(node.keyPair.network.pubKeyHash, 0);
        pubKeyHash.copy(payload, 1);
        let address = __WEBPACK_IMPORTED_MODULE_1_bs58check___default.a.encode(payload);
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


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10).Buffer))

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    BITCOIN: {
        network: {
            mainNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x00,
                scriptHash: 0x05,
                wif: 0x80,
                dustThreshold: 546
            },
            testNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x6f,
                scriptHash: 0xc4,
                wif: 0xef,
                dustThreshold: 546
            }
        },
        pouch: {
            coinHDType: 0,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'BTC',
            isSingleToken: false,
            isTestnet: false
        }
    },
    DASH: {
        network: {
            mainNet: {
                messagePrefix: '\x19DarkCoin Signed Message:\n',
                bip32: {
                    public: 0x02fe52cc,
                    private: 0x02fe52f8
                },
                pubKeyHash: 0x4c,
                scriptHash: 0x10,
                wif: 0xcc,
                dustThreshold: 5460
            },
            testNet: {
                messagePrefix: '\x19DarkCoin Signed Message:\n',
                bip32: {
                    public: 0x3a805837,
                    private: 0x3a8061a0
                },
                pubKeyHash: 0x8c,
                scriptHash: 0x13,
                wif: 0xef,
                dustThreshold: 5460
            }
        },
        pouch: {
            coinHDType: 5,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'DASH',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    ETHEREUM_CLASSIC: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 61,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ETC',
            isSingleToken: false,
            isTestnet: false
        }
    },
    LITECOIN: {
        network: {
            mainNet: {
                messagePrefix: '\x19Litecoin Signed Message:\n',
                bip32: {
                    public: 0x019da462,
                    private: 0x019d9cfe
                },
                pubKeyHash: 0x30,
                scriptHash: 0x05,
                wif: 0xb0,
                dustThreshold: 0
            },
            //@note: @todo: @here: needs to update to have litecoin testnet definitions.
            testNet: { error: true },
        },
        pouch: {
            coinHDType: 2,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'LTC',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    LISK: {
        network: {
            mainNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x00,
                scriptHash: 0x05,
                wif: 0x80,
                dustThreshold: 546
            },
            testNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x6f,
                scriptHash: 0xc4,
                wif: 0xef,
                dustThreshold: 546
            }
        },
        pouch: {
            coinHDType: 134,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'LSK',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    ZCASH: {
        network: {
            mainNet: {
                messagePrefix: '\x19ZCash Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x1cb8,
                scriptHash: 0x1cbd,
                wif: 0x80,
                dustThreshold: 0
            },
            testNet: {
                messagePrefix: '\x19ZCash Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x1d25,
                scriptHash: 0x1cba,
                wif: 0xef,
                dustThreshold: 0
            },
        },
        pouch: {
            coinHDType: 133,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ZEC',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    TESTNET_ROOTSTOCK: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 137 + 37173,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'SBTC',
            isSingleToken: true,
            isTestnet: true
        }
    },
    DOGE: {
        network: {
            mainNet: {
                messagePrefix: '\x19Dogecoin Signed Message:\n',
                bip32: {
                    public: 0x02facafd,
                    private: 0x02fac398
                },
                pubKeyHash: 0x1e,
                scriptHash: 0x16,
                wif: 0x9e,
                dustThreshold: 0
            },
            //@note: @todo: @here: needs to update to have doge testnet definitions.
            testNet: { error: true }
        },
        pouch: {
            coinHDType: 3,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'DOGE',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    //以太坊
    ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ETH',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    THEDAO_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'DAO',
            tokenContractAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
            refundOpCode: '0x3ccfd60b',
            approveOpCode: '0x095ea7b3',
            tokenWithdrawalAddress: '0xbf4ed7b27f1d666546e30d74d50d173d20bca754',
        }
    },
    AUGUR_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'REP',
            tokenContractAddress: '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    ICONOMI_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'ICN',
            tokenContractAddress: '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    GOLEM_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'GNT',
            tokenContractAddress: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    GNOSIS_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'GNO',
            tokenContractAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    SINGULARDTV_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'SNGLS',
            tokenContractAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    DIGIX_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'DGD',
            tokenContractAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb'
        }
    },
    BLOCKCHAINCAPITAL_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'BCAP',
            tokenContractAddress: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    CIVIC_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'CVC',
            tokenContractAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    NUMCOINTYPES_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {}
    }
});

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Seed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bip39__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bip39__);


class Seed {
    constructor(options = {}) {
        this._mnemonic = '';
        this._strength = options.strength || 128;
        this._wordlist = __WEBPACK_IMPORTED_MODULE_0_bip39___default.a.wordlists[options.wordlist || 'chinese_simplified'];
    }
    generateMnemonic() {
        this._mnemonic = __WEBPACK_IMPORTED_MODULE_0_bip39___default.a.generateMnemonic(this._strength, undefined, this._wordlist);
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
        return __WEBPACK_IMPORTED_MODULE_0_bip39___default.a.mnemonicToSeedHex(this._mnemonic, passphrase);
    }
    clear() {
        this._mnemonic = '';
    }
}



/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackupWalletPage = (function () {
    function BackupWalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return BackupWalletPage;
}());
BackupWalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-backupWallet',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/backupWallet/backupWallet.html"*/' <ion-header padding>\n  <h3>Backup Your Wallet</h3>\n  <p class="text1">备份你的钱包助记词<br>以方便日后恢复此钱包</p>\n  <p class="text2">钱包助记词为 <span class="darkGray">12位</span> 或 <span class="darkGray">24位</span> 随机单词，使用此助记词，可随时获取你的钱包信息</p>\n </ion-header>\n <ion-content padding >\n  <div class="main">\n    <button ion-button class="btn-style new-wallet">Backup Now</button>\n    <p class="backupLater">I’ll Backup Later</p>\n  </div>\n </ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/backupWallet/backupWallet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], BackupWalletPage);

//# sourceMappingURL=backupWallet.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpWordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpWordPage = (function () {
    function HelpWordPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    return HelpWordPage;
}());
HelpWordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-helpWord',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/helpWord/helpWord.html"*/'<ion-content padding >\n  <img src="../../../assets/icon/icon_back_d_2x.png" alt="back" class="icon-back">\n  <h3>Remember the<br>Mnemonic Word Below</h3>\n  <ul class="select-content">\n    <li>Time</li>\n    <li>July</li>\n    <li>Boy</li>\n    <li>Earth</li>\n    <li>Noon</li>\n    <li>Morning</li>\n    <li>Summer</li>\n    <li>Hospital</li>\n    <li>Lion</li>\n    <li>Phone</li>\n    <li>Cup</li>\n    <li>Young</li>\n  </ul>\n  <div class="quantity">\n    <span>Quantity of Mnemonic Word</span>\n    <div class="btn-select">\n      <button ion-button outline class="btn-style active">12</button>\n      <button ion-button outline class="btn-style">24</button>\n    </div>\n  </div>\n  <div class="advanced">\n    <div class="top-bar">\n      <span class="title">Advanced</span>\n      <img src="../../../assets/icon/icon_switchdown_2x.png" alt="switchdown" class="icon-switch arrowDown">\n    </div>\n    <div class="addPassword">\n      <div class="content">\n        <p>Add a Password to Protect Your<br>Mnemonic Word</p>\n        <ion-item class="focus"> \n          <ion-input type="text" placeholder="Input Password"></ion-input> \n        </ion-item> \n        <ion-item> \n          <ion-input type="password" placeholder="Repeat Password"></ion-input> \n        </ion-item> \n      </div>\n    </div>\n  </div>\n\n  <p class="tip">* Please keep the password savely, Lost the password\n      you may not find your assets back.</p>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)="showAlert()">\n    <ion-title>I Got It</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/helpWord/helpWord.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HelpWordPage);

//# sourceMappingURL=helpWord.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningWordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarningWordPage = (function () {
    function WarningWordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return WarningWordPage;
}());
WarningWordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-warningWord',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/warningWord/warningWord.html"*/' <ion-header padding>\n  <img src="../../../assets/icon/icon_back_d_2x.png" alt="back" class="icon-back">\n  <h3>Warning</h3>\n  <p class="text1">1. 确保身边没有人会看到你的助记词</p>\n  <p class="text2">2. <span class="warnTip">不要截图记录</span>助记词，其它应用能够从截图上读取到你的助记词。建议将助记词抄写在纸上，并妥善保管。</p>\n  <div class="icon-tip">\n    <img src="../../../assets/icon/icon_nospy_2x.png" alt="nospy">\n    <img src="../../../assets/icon/icon_noscreenprint_2x.png" alt="noscreenprint">\n  </div>\n </ion-header>\n <ion-content padding >\n  <div class="main">\n    <button ion-button class="btn-style new-wallet">OK</button>\n  </div>\n </ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/warningWord/warningWord.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WarningWordPage);

//# sourceMappingURL=warningWord.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMnemonicWordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputMnemonicWordPage = (function () {
    function InputMnemonicWordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return InputMnemonicWordPage;
}());
InputMnemonicWordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inputmnemonicword',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/inputMnemonicWord/inputMnemonicWord.html"*/'<ion-content padding >\n  <img src="../../../assets/icon/icon_back_d_2x.png" alt="back" class="icon-back">\n  <h3>Input Your<br>Mnemonic Word</h3>\n  <ul class="select-content">\n    <li>Time</li>\n    <li>July</li>\n    <li>Boy</li>\n    <li>Earth</li>\n  </ul>\n  <div class="tap-content">\n    <p class="tip-title">Tap the Mnemonic Words in order</p>\n    <div class="btn-select">\n      <button ion-button outline class="btn-style active">Time</button>\n      <button ion-button outline class="btn-style">July</button>\n      <button ion-button outline class="btn-style">Summer</button>\n      <button ion-button outline class="btn-style active">Lion</button>\n      <button ion-button outline class="btn-style">Hospital</button>\n      <button ion-button outline class="btn-style">Young</button>\n      <button ion-button outline class="btn-style active">Noon</button>\n      <button ion-button outline class="btn-style">Cup</button>\n      <button ion-button outline class="btn-style">Time</button>\n      <button ion-button outline class="btn-style">July</button>\n      <button ion-button outline class="btn-style">Summer</button>\n      <button ion-button outline class="btn-style">Lion</button>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Confirm</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/indexWallet/inputMnemonicWord/inputMnemonicWord.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], InputMnemonicWordPage);

//# sourceMappingURL=inputMnemonicWord.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAssetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddAssetsPage = (function () {
    function AddAssetsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AddAssetsPage;
}());
AddAssetsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addAssets',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/addAssets/addAssets.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../../assets/icon/icon_back_d_2x.png" alt="back" class="icon-back">\n    <ion-title>\n      Add Assets\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="checkbox-list">\n    <ul>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_on_2_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_on_2_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_on_2_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_off_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_off_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n      <li class="checkbox-item">\n        <div class="item-left">\n          <img class="icon-cny" src="../../assets/icon/icon_btc.png" alt="">\n        </div>\n        <div class="item-right">\n          <span class="cny-name">Bitcoin</span>\n          <div class="checkbox-content">\n            <input class="input-checkbox" type="checkbox" name="chbox">\n            <img class="icon-checkbox" src="../../assets/icon/checkbox_off_2x.png" alt="">\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/addAssets/addAssets.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AddAssetsPage);

//# sourceMappingURL=addAssets.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletSendPage = (function () {
    function WalletSendPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return WalletSendPage;
}());
WalletSendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-walletSend',template:/*ion-inline-start:"/Users/chenyu/workspace/web/wallet-app/src/pages/walletSend/walletSend.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="../../../assets/icon/icon_back_d_2x.png" alt="back" class="icon-back">\n    <ion-title>\n      wallet send\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="payee-address">\n    <h3>Payee Address</h3>\n    <div class="pay-content">\n      <ion-input placeholder="Input name here" clearInput></ion-input>\n      <img src="../../assets/icon/icon_scan_l_2x.png" alt="" class="btn-scan">\n    </div>\n  </div>\n\n  <div class="address-book">\n    <div class="title-top">\n      <h3>Payee Address</h3>\n      <div class="right">\n        <img src="../../assets/icon/icon_add_l_b_2x.png" alt="">\n        <span class="add-address">Add Address</span>\n      </div>\n    </div>\n    <div class="address-list">\n      <div class="list-item">\n          <p class="name">Lily</p>\n          <p class="address">tn1j6sk873hctn1j6sk873hctn1j6sk873hctn1j6sk8709</p>\n          <img src="../../assets/icon/icon_goto_w_2x.png" alt="" class="btn-arrow">\n      </div>\n      <div class="list-item">\n          <p class="name">Lily</p>\n          <p class="address">tn1j6sk873hctn1j6sk873hctn1j6sk873hctn1j6sk8709</p>\n          <img src="../../assets/icon/icon_goto_w_2x.png" alt="" class="btn-arrow">\n      </div>\n      <div class="list-item">\n          <p class="name">Lily</p>\n          <p class="address">tn1j6sk873hctn1j6sk873hctn1j6sk873hctn1j6sk8709</p>\n          <img src="../../assets/icon/icon_goto_w_2x.png" alt="" class="btn-arrow">\n      </div>\n    </div>\n  </div>\n\n  <div class="address-book">\n      <div class="title-top">\n        <h3>Send to My Wallets</h3>\n      </div>\n      <div class="address-list">\n        <div class="list-item">\n            <p class="name">Lily</p>\n            <p class="address">tn1j6sk873hctn1j6sk873hctn1j6sk873hctn1j6sk8709</p>\n            <img src="../../assets/icon/icon_goto_w_2x.png" alt="" class="btn-arrow">\n        </div>\n        <div class="list-item">\n            <p class="name">Lily</p>\n            <p class="address">tn1j6sk873hctn1j6sk873hctn1j6sk873hctn1j6sk8709</p>\n            <img src="../../assets/icon/icon_goto_w_2x.png" alt="" class="btn-arrow">\n        </div>\n      </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/chenyu/workspace/web/wallet-app/src/pages/walletSend/walletSend.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], WalletSendPage);

//# sourceMappingURL=walletSend.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map