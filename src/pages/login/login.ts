import { Component } from '@angular/core';
import { IonicPage, ViewController, Platform } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Observable } from 'rxjs/Observable';

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

  user: Observable<firebase.User>
  usuario: string = null
  password: string = null

  constructor(private  viewCtrl: ViewController,
              private  authService: AuthService,
              private  storageService: StorageService,
              private  platform: Platform) {
  }
  
  afterLogin(response) {
    this.storageService.setItem('user', response)
    this.viewCtrl.dismiss()
  }

  async loginGoogle() {
    if (this.platform.is('cordova')) {
      //this.authService.nativeGoogleLogin()
      this.authService.loginWithEmail(this.usuario, this.password)
        .then(response => {
          this.afterLogin(response)
        })
    } else {
      this.authService.webGoogleLogin()
        .then(response => {
          this.afterLogin(response)
        })
    }
  }

}
