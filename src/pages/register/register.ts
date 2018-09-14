import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SelectfirstPage } from '../selectfirst/selectfirst';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  loading: any;
   regData = {name: '',dob:'', gender: '', email: '',phone:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}


  doSignup() {
  alert(1);

    this.showLoader();
    this.authService.register(this.regData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.pop();
       console.log('registration page response',result);

      //if(result.status==='1'){
      //alert('User registered successfully.');
      // this.navCtrl.push(SelectfirstPage);
      // }
      this.navCtrl.push(SelectfirstPage);


    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });



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
