import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://192.168.1.11/appservice/public/user_access';
let apiUrl_mobile="http://192.168.1.11/appservice/public/sent_otp"

@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');


//        this.http.post(apiUrl_mobile, JSON.stringify(credentials), {headers: headers})
//          .subscribe(res => {
//            resolve(res.json());
//          }, (err) => {
 //           reject(err);
 //         });


 this.http.get('http://192.168.1.11/appservice/public/sent_otp/'+credentials).map(res => res.json()).subscribe(data => {
       // this.posts = data;
        console.log(data);
        alert(data);
    });
    });
  }

  register(data) {
  console.log(data);
    return new Promise((resolve, reject) => {
        
      


    this.http.post(apiUrl, JSON.stringify(data))
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}
