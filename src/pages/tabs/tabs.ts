import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  feedRoot: any = HomePage
  perfilRoot: any = PerfilPage
  aboutRoot: any = AboutPage

  constructor(public  navCtrl: NavController, 
              public  navParams: NavParams,
              private modalCtrl : ModalController,
              private storageService: StorageService) {
    const user = storageService.getItem('user')
    
    if(!user) {
      const modal = modalCtrl.create(LoginPage)
      modal.present()
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
