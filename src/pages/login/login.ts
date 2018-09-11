import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { VerifyotpPage } from '../verifyotp/verifyotp';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
 // loginData = { mobileno:'' };
     mobileno:any;
     otp:string;
      public myOtp: string;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController,public http: Http) {}

  doLogin() {
  //  this.showLoader();
 // console.log(this.mobileno);
  //  this.authService.login(this.mobileno).then((result) => {
    
    //alert("sandeep ");
    //console.log(result);

      //this.loading.dismiss();
      //this.data = result;
      //localStorage.setItem('token', this.data.access_token);
      //this.navCtrl.setRoot(TabsPage);
    //}, (err) => {
      //this.loading.dismiss();
      //this.presentToast(err);
    //});


    this.http.get('http://192.168.1.11/appservice/public/sent_otp/'+this.mobileno).map(res => res.json()).subscribe(data => {
       
      this.otp=data;
       alert(this.otp);
       
       
        this.navCtrl.push(VerifyotpPage,{
        item:this.otp});
  
    });
    
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
