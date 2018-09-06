import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { LugaresService } from '../../services/lugares.service';
import { Camera } from '@ionic-native/camera';

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
              private toastCtrl: ToastController,
              private platform: Platform, 
              private camera: Camera) {
    this.lugar = this.navParams.data.lugar || {}
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

  tomarFoto() {
    this.platform.ready().then(() => {

      this.camera.getPicture().then(() => {

      })

    })
  }
}
