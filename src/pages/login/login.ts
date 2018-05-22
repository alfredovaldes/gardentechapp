import { Component,  NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = { email: '', password: '' };
  private captchaPassed: boolean = false;
  private captchaResponse: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider,
    public alertCtrl: AlertController, private http: HttpClient, private zone: NgZone) {
  }

  captchaResolved(response: string): void {
    this.zone.run(() => {
      this.captchaResponse = response;
      let data = {
        captchaResponse: this.captchaResponse
    };     
    this.http.post('https://gardentech.herokuapp.com/test', data).subscribe(res => {
        if(res==1){
          this.captchaPassed = true;
        }
        else{
          this.captchaPassed = false;
        }
    });
    });
}

  signin() {
    this.auth.registerUser(this.user.email, this.user.password)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }
  login() {
    this.auth.loginUser(this.user.email, this.user.password).then((user) => {
    }
    )
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
  }
}
