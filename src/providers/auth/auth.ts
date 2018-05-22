import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth,public storage: Storage) {
  }

  // Registro de usuario
  registerUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
      })
      .then(user => {
        var usuario = firebase.auth().currentUser;
        if (usuario != null) {
          this.storage.set('uid', usuario.uid);
        }
        else {
        } Promise.resolve(user)
      })
      .catch(err => Promise.reject(err))
  }

  // Login de usuario
  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        var usuario = firebase.auth().currentUser;
        if (usuario != null) {
          this.storage.set('uid', usuario.uid);
        }
        else {
        }
        Promise.resolve(user)
      })
      .catch(err => Promise.reject(err))
  }

  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut().then(() => {
      // hemos salido
    })
  }


  // Devuelve la session
  get Session() {
    return this.afAuth.authState;
  }

}