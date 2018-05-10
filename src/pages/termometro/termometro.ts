import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service'

/**
 * Generated class for the TermometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termometro',
  templateUrl: 'termometro.html',
})
export class TermometroPage {
  sensores: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
  }
  actualizar(refresher) {
    this.userService.getdata("Jardin2")
    .subscribe(
      (data) => {
        var resultados = [];
        for (var i in data) {
          resultados.push(data[i]);
        }
        this.sensores=resultados.reverse();
        refresher.complete();
      },
      (error) =>{
        console.error(error);
        refresher.complete();
      }
    )
  }
  ionViewDidLoad() {
    this.userService.getdata("Jardin2")
    .subscribe(
      (data) => {
        var resultados = [];
        for (var i in data) {
          resultados.push(data[i]);
        }
        this.sensores=resultados.reverse();
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  temperatura(Temperatura) {
    Temperatura=10;

    console.log("temperatura")
    return Temperatura;
  }
  humedad(Humedad) {
    Humedad=10;

    console.log("humedad")
    return Humedad;
  } intensidad(Intensidad) {
    Intensidad=10;

    console.log("intensidad")
    return Intensidad;
  }
  presion(Presion) {
    Presion=10;

    console.log("presion")
    return Presion;
  }
  co(Co) {
    Co=10;

    console.log("hola co")
    return Co;
  }
  lluvia(Lluvia) {
    Lluvia=10;

    console.log("lluvia")
    return Lluvia;
  }
  humedadtierra(Humedadtierra) {
    Humedadtierra=10;

    console.log("humedadtierra")
    return Humedadtierra;
  }
  
}
