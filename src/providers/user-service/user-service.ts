import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
getdata(device){
  return this.http.get('https://boiling-earth-33302.herokuapp.com/getdata?device='+device+'&results=1');
}
}
