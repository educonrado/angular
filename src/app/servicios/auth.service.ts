import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _afAuth:AngularFireAuth
  ) { }

  registerUser(email:string, pass:string){
    return new Promise((resolve, reject) => {
      this._afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmail(email:string, pass:string){
    return new Promise((resolve, reject) => {
      this._afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  getAuth(){
    //Cambiado para evitar error orginal.  authState.map(auth=>auth)
    return this._afAuth.authState.subscribe(auth => auth);
  }

  logout(){
    return this._afAuth.auth.signOut();
  }
}
