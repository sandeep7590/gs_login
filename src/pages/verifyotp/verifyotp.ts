import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SelectfirstPage } from '../selectfirst/selectfirst';



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
otp:string;
otpvalue:string;
existingUser:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 //navParams.get('item');
 // alert(navParams.get('item'));
  console.log('getting otp from loginpage',navParams.get('item'));
 // alert(navParams.get('param2'));
     this.otp=navParams.get('item');
     this.existingUser=navParams.get('param2');
     console.log('existing user: ',navParams.get('param2'));
  }

  checkOtp(){
  
  console.log('otpvalue: ',this.otpvalue);
  console.log('otp: ',this.otp);
 
  if(this.otpvalue.match(this.otp) && this.existingUser.match('Yes')){

   //send dashboard page
   alert(1);
    this.navCtrl.push(SelectfirstPage);
  

  }
  else if(this.otpvalue.match(this.otp) && this.existingUser.match('No')){
   alert(2);
  this.navCtrl.push(RegisterPage);

  console.log('value not match');

  
  } 

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyotpPage');
  }

}
