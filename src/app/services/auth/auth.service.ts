import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user';

@Injectable()
 
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

   }

   
//    public getAuth () : firebase.auth.Auth {
//     return this.afAuth; 
//  }
  // get the current User Id
  public  getCurrentUserUid() : string {
    return  firebase.auth().currentUser.uid;
  }
  // log in 
  public sigin(user: User) : Promise<firebase.auth.UserCredential>  {
     return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
   }


  // register
  public createAccount(user: User) : Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password); 
   }

  // logout 
  public logout(): Promise<void> {
    return this.afAuth.signOut();
  }
  
  }