import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

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

  constructor(private  viewCtrl: ViewController,
              private  authService: AuthService,
              private  storageService: StorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginGoogle() {
    this.authService.loginWithGoogle()
      .then(response => {
        this.storageService.setItem('user', response)
        this.viewCtrl.dismiss()
      })
  }
}
