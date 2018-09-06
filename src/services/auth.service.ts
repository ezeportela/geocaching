import { AngularFireAuth } from'angularfire2/auth';
import { AngularFireDatabase } from'angularfire2/database';
import { Injectable } from'@angular/core';
import * as firebase from"firebase/app";

@Injectable()
export class AuthService {

  constructor (public afDB: AngularFireDatabase, 
                public afAuth: AngularFireAuth) {
  }

  loginWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  nativeGoogleLogin() {
    /*return this.googlePlus.login({
      'webClientId': '96677423232-e9ahll8l89tqo560n924up6mg4jeql8q.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile email'
    }).then(response => response)
      .catch(error => alert(error))*/

  
      //return gplusUserawait this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  }

  async webGoogleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      return await this.afAuth.auth.signInWithPopup(provider);
    } catch(err) {
      console.log(err)
    }
  }

  logout() {
      return this.afAuth.auth.signOut()
  }
}