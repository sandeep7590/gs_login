
import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { VerifyotpPage } from '../verifyotp/verifyotp';

/*
  Generated class for the SelectionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html'
})
export class SelectionPage {
loading: any;
 
     mobileno:any;
     otp:string;
      public myOtp: string;
      usertype:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, private toastCtrl: ToastController,public http: Http) {}
 

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

 this.showLoader();
    this.http.get('http://192.168.1.11/appservice/public/sent_otp/'+this.mobileno).map(res => res.json()).subscribe(data => {
       
      this.loading.dismiss();
       

       
       if(data.status==='1'){
       //user not register send to veryfyotp page page with otp
  
  console.log(data.otp);
        this.navCtrl.push(VerifyotpPage,{
        item: data.otp});


      }else if(data.status==='2'){
       //user already registerd  go to dashboard
         alert('Registered user');


       }
       else if(data.status==='0'){

          alert('Some error occured please try later');
       }
       
     
  
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
