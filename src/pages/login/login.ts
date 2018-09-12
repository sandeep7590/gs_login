import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Headers } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { SelectionPage } from '../selection/selection';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
 

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}

  

  athlete() {
    this.navCtrl.push(SelectionPage);

  }

  parent(){
  this.navCtrl.push(SelectionPage);
  }



}
