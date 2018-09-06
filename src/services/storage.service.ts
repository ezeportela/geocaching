import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

  constructor() {

  }

  setItem(item, data) {
    localStorage.setItem(item, JSON.stringify(data))
  }

  getItem(item) {
    return JSON.parse(localStorage.getItem(item))
  }

  removeItem(item) {
    localStorage.removeItem(item)
  }
}