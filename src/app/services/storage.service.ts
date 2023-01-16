import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  //defini une nouvelle entrée dans le localStorage
  set(key:string , value :any) {
    localStorage.setItem(key,value);
  }

   // permet de retrouver des données du localstorage en fonction de la clé
  get(key :string) {
    return localStorage.getItem(key);
  }

}
