import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient, public auth: AuthProvider, public storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }
  getdata(device) {
    this.auth.storage.get('uid').then(value=>{
      console.log(value);
    }).catch(error=>{
      console.log(error);
    });
    return this.http.get('https://boiling-earth-33302.herokuapp.com/getdata?device=' + device + '&results=1');
  }
}
