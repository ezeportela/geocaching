import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = []

  constructor(private navCtrl: NavController,
              private lugaresService: LugaresService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
    this.getLugares()
  }

  getLugares() {
    this.lugaresService
        .getLugares()
        .valueChanges()
        .subscribe(snapshot => {
          this.lugares = snapshot
        })
  }

  crearLugar() {
    this.navCtrl.push(LugarPage)
  }

  editarLugar(lugar) {
    this.navCtrl.push(LugarPage, { lugar })
  }

  eliminarLugar(lugar) {
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

            this.lugaresService.deleteLugar(lugar).then(() => {
              toast.present()
            })
          }
        }
      ]
    })

    alert.present()
  }

}
