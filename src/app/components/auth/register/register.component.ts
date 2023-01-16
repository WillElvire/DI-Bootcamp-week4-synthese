import { StorageService } from './../../../services/storage.service';
import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //appelle des différents services internes à appeler
  providers : [ VerificationService , StorageService , ApiService]
})
export class RegisterComponent implements OnInit  {

  //variable pour recuperer la liste des utilisateurs
  users : any ;
  //creation du modele register
  register =  {
    firstname : "",
    lastname  : "",
    password  : "",
    email     : "",
    passwordConfirm : "",
    cgu  : false,
  }

  //definition du constructeur
  constructor(
    private verificationService : VerificationService ,
    private storageService : StorageService,
    private apiService : ApiService
  ){

  }

  // le ngOnInit permet  d'initialiser des variables
  ngOnInit(): void {
    //appelle de la fonction pour avoir la listes des utilisateurs
    this.getUsers();
  }

  submitRegisterForm() {
    //verification des entrées saisi par l'utilisateur
    if(!this.register.firstname  &&
      !this.register.lastname &&
      !this.register.email &&
      !this.register.password &&
      !this.register.passwordConfirm &&
      !this.register.cgu){
      //si les entrées sont vides retourner un message d'erreur
      return alert("Kindly fill all fields");
    }
    //verificatin du mot de passe
    if(!this.verificationService.passwordVerification(
      {
        password : this.register.password,
        passwordConfirm : this.register.passwordConfirm
      }
    ) )
    {
      //retourner un message d'alerte si les mots de passe ne concordent pas
      return alert("password doesn't match !");
    }

    //enregistrement des informations utilisateurs de le localstorage
    this.storageService.set("user",JSON.stringify(this.register));

  }


  // methode permettant de consommer une api
  getUsers() {
    //appelle api sur le route users
    this.apiService.get("users").subscribe((persons : any) => {
      // initialisation de la variables
      this.users = persons;
      console.log(persons)
    });
  }

  //fonction permettant de modifier un utilisateur
  modifyUser(user : any) {
   console.log(user);
   this.register.firstname = user.name;
   this.register.lastname  = user.username;
   this.register.email     = user.email;
  }




}
