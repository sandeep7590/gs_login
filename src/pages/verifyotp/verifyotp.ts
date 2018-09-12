import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';



/*
  Generated class for the VerifyotpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-verifyotp',
  templateUrl: 'verifyotp.html'
})
export class VerifyotpPage {
otp1:string;
otpvalue:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 //navParams.get('item');
  alert(navParams.get('item'));
  console.log('getting otp from loginpage',navParams.get('item'));
     this.otp1=navParams.get('item');
  }

  checkOtp(){
  console.log('optvalue: ',this.otpvalue);
  console.log('opt1: ',this.otp1);
  if(this.otpvalue.match(this.opt1)){
   
   this.navCtrl.push(RegisterPage);

  }else{

  console.log('value not match');
  
  } 




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyotpPage');
  }

}
