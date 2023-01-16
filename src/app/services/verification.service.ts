import { Injectable } from '@angular/core';

@Injectable()
export class VerificationService {
  constructor() { }

  //permet de faire la verification entre deux mots de passes
  passwordVerification(checker : {password : string , passwordConfirm : string}) {
    return checker.password == checker.passwordConfirm;
  }
}
