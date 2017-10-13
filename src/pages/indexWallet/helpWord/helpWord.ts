import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-helpWord',
  templateUrl: 'helpWord.html'
})
export class HelpWordPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  // showAlert() {
  //   let alert = this.alertCtrl.create({
  //       cssClass:'disable-screenshots',
  //       title: 'Warning',
  //       subTitle: '请不要使用截图记录助记词，其它应用能够从截图上读取到你的助记词。<br>建议将助记词抄写在纸上，并妥善保管。',
  //       message: '<img class="icon-noscreenprint" src="../../../assets/icon/icon_noscreenprint_2x.png" />',
  //       buttons: ['OK']
  //   });
  //   alert.present();
  // }
}
