import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  user: any = {}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storageService: StorageService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
    this.user = this.storageService.getItem('user').user
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad PerfilPage')
  }

  logout() {
    const alert = this.alertCtrl.create({
      title: 'Desconectarse',
      message: '¿Confirma que desea salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Salir',
          handler: () => {
            localStorage.removeItem('user')
            const modal = this.modalCtrl.create(LoginPage)
            modal.present()
          }
        }
      ]
    })

    alert.present()
  }

}
