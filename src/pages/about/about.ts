import { Component } from '@angular/core';
import { NavController, Label } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public userService: UserService, private storage: Storage) {

  }

  sensores: boolean = false;
  temp: number[] = [];
  airHum: number[] = [];
  lux: number[] = [];
  gndHum: number[] = [];
  gasCo2: number[] = [];
  presBar: number[] = [];
  lluvia: number[] = [];
  public lineChartData: Array<any> = [{ data: [0, 1, 2, 3, 4, 5, 6, 7], label: 0 }, { data: null, label: 0 }, { data: null, label: 0 }];
  public lineChartData2: Array<any> = [{ data: [0, 1, 2, 3, 4, 5, 6, 7], label: 0 }];
  public lineChartData3: Array<any> = [{ data: [0, 1, 2, 3, 4, 5, 6, 7], label: 0 }];
  public lineChartData4: Array<any> = [{ data: [0, 1, 2, 3, 4, 5, 6, 7], label: 0 }];
  public lineChartData5: Array<any> = [{ data: [0, 1, 2, 3, 4, 5, 6, 7], label: 0 }];
  public lineChartLabels: Array<any> = [0];

  actualizar(refresher) {
    this.storage.get('uid').then(value => {
      this.temp = [];
      this.airHum = [];
      this.gndHum = [];
      this.presBar = [];
      this.gasCo2 = [];
      this.lux = [];
      this.lluvia = [];
      this.userService.getdata("Jardin2", 10, value)
        .subscribe(

          (data) => {

            var labels = [];
            var keys = Object.keys(data);
            for (var i in keys) {
              labels.push(parseInt(keys[i]));
            }
            this.lineChartLabels = labels;
            for (var j in data) {
              this.temp.push(data[j].temp);
            }
            for (var k in data) {
              this.airHum.push(data[k].airHum);
            }
            for (var l in data) {
              this.gndHum.push(data[l].gndHum);
            }
            for (var m in data) {
              this.lluvia.push(data[m].lluvia);
            }
            for (var n in data) {
              this.lux.push(data[n].lux);
            }
            for (var o in data) {
              this.presBar.push(data[o].presBar);
            }
            for (var p in data) {
              this.gasCo2.push(data[p].gasCo2);
            }
            this.lineChartData = [{ data: this.temp, label: 'Temperatura' },
            { data: this.airHum, label: 'Humedad del Aire' },
            { data: this.gndHum, label: 'Humedad de la Tierra' }];
            this.lineChartData2 = [{ data: this.lluvia, label: 'Lluvia' }];
            this.lineChartData3 = [{ data: this.lux, label: 'Intensidad Luminosa' }];
            this.lineChartData4 = [{ data: this.gasCo2, label: 'PPM CO2' }];
            this.lineChartData5 = [{ data: this.presBar, label: 'Presion Barometrica' }];
            this.sensores = true;
            refresher.complete();
          },
          (error) => {
            refresher.complete();
          }
        )
    },
      (error) => {
        refresher.complete();
      }).catch(error => {
        refresher.complete();
      });
  }
  ionViewDidLoad() {
    this.storage.get('uid').then(value => {
      this.userService.getdata("Jardin2", 10, value)
        .subscribe(
          (data) => {
            var labels = [];
            var keys = Object.keys(data);
            for (var i in keys) {
              labels.push(this.timeConverter(parseInt(keys[i])));
            }
            this.lineChartLabels = labels;
            for (var j in data) {
              this.temp.push(data[j].temp);
            }
            for (var k in data) {
              this.airHum.push(data[k].airHum);
            }
            for (var l in data) {
              this.gndHum.push(data[l].gndHum);
            }
            for (var m in data) {
              this.lluvia.push(data[m].lluvia);
            }
            for (var n in data) {
              this.lux.push(data[n].lux);
            }
            for (var o in data) {
              this.presBar.push(data[o].presBar);
            }
            for (var p in data) {
              this.gasCo2.push(data[p].gasCo2);
            }
            this.lineChartData = [{ data: this.temp, label: 'Temperatura' },
            { data: this.airHum, label: 'Humedad del Aire' },
            { data: this.gndHum, label: 'Humedad de la Tierra' }];
            this.lineChartData2 = [{ data: this.lluvia, label: 'Lluvia' }];
            this.lineChartData3 = [{ data: this.lux, label: 'Intensidad Luminosa' }];
            this.lineChartData4 = [{ data: this.gasCo2, label: 'PPM CO2' }];
            this.lineChartData5 = [{ data: this.presBar, label: 'Presion Barometrica' }];
            this.sensores = true;
          },
          (error) => {
          }
        )
    },
      (error) => {
      }).catch(error => {
      });
  }

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public lineChartColors1: Array<any> = [
    { // rojo
      backgroundColor: 'rgba(200,159,177,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // verde
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(0,255,0,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // azul
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartColors2: Array<any> = [
    { // amarillo
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(255,255,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartColors3: Array<any> = [
    { // CYAn
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(0,255,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartColors4: Array<any> = [
    { // MORADO
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(255,0,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartColors5: Array<any> = [
    { // NARANJA
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(255,165,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
  timeConverter(t) {
    var a = new Date(t * 1000);
    var today = new Date();
    var yesterday = new Date(Date.now() - 86400000);
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if (a.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0))
      return 'hoy, ' + this.twoDigits(hour) + ':' + this.twoDigits(min);
    else if (a.setHours(0, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0))
      return 'ayer, ' + this.twoDigits(hour) + ':' + this.twoDigits(min);
    else if (year == today.getFullYear())
      return date + ' ' + month + ', ' + this.twoDigits(hour) + ':' + this.twoDigits(min);
    else
      return date + ' ' + month + ' ' + year + ', ' + this.twoDigits(hour) + ':' + this.twoDigits(min);
  }
  twoDigits(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  }
}
