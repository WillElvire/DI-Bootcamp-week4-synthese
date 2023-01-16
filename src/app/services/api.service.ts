import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url de base pour l'api
  baseUrl : string = "https://jsonplaceholder.typicode.com/";

  //injection de dependance HttpClient
  constructor(private http : HttpClient) {

  }

  // fonction pour retourner les données de l'api sous la méthodes get
  get(endpoint :string) {
    //methode get avec l'endpoint
    return this.http.get(this.baseUrl+endpoint);
  }

}
