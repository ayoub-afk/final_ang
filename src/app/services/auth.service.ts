import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _auth:Auth) {
  }
  logIn(email:string,password:string){
    return signInWithEmailAndPassword(this._auth, email,password)
  }
}
