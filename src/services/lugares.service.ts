import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresService {
  public constructor(public afDB: AngularFireDatabase) {
  
  }

  getLugares() {
    return this.afDB.list('/lugares')
  }

  getLugar(id) {
    return this.afDB.object(`/lugares/${id}`)
  }

  createLugar(lugar) {
    return this.afDB.database.ref(`/lugares/${lugar.id}`).set(lugar)
  }

  editLugar(lugar) {
    return this.afDB.database.ref(`/lugares/${lugar.id}`).set(lugar)
  }

  deleteLugar(lugar) {
    return this.afDB.database.ref(`/lugares/${lugar.id}`).remove()
  }
}