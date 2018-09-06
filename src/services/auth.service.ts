import { AngularFireAuth } from'angularfire2/auth';
import { AngularFireDatabase } from'angularfire2/database';
import { Injectable } from'@angular/core';
import * as firebase from"firebase/app";

@Injectable()
export class AuthService {

    constructor (public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {
    }

    relogin(token) {
      return this.afAuth.auth.signInWithCustomToken(token)
    }

    login(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
    }

    loginWithGoogle() {
      return this.login(new firebase.auth.GoogleAuthProvider)
    }

    logout() {
        return this.afAuth.auth.signOut()
    }
}