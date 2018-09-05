import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { LugaresService } from '../../services/lugares.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar: any = {}

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private lugaresService: LugaresService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
    this.lugar = navParams.data.lugar || {}
  }

  guardarLugar() {
    this.lugar.id = this.lugar.id ? this.lugar.id : Date.now()
    this.lugaresService.createLugar(this.lugar)

    const toast = this.toastCtrl.create({
      message: 'Lugar actualizado correctamente!',
      duration: 2000,
      position: 'bottom'
    })
  
    toast.present()
    this.navCtrl.pop()
  }

  eliminarLugar() {
    const alert = this.alertCtrl.create({
      title: 'Eliminar Lugar',
      message: '¿Confirma que desea eliminar el lugar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            const toast = this.toastCtrl.create({
              message: 'Lugar eliminado correctamente!',
              duration: 2000,
              position: 'bottom'
            })

            this.lugaresService.deleteLugar(this.lugar).then(() => {
              toast.present()
              this.navCtrl.pop()
            })
          }
        }
      ]
    })

    alert.present()
  }
}
