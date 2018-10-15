import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  public fireAuth: firebase.auth.Auth;
  public userProfile: firebase.database.Reference;
  public currentUser: firebase.User;

  constructor() {
    this.userProfile = firebase.database().ref('/userProfile');
    this.fireAuth = firebase.auth();
    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  getUser(): firebase.User {
    return this.currentUser;
  }

  createAnonymousUser(): Promise<any> {
    return this.fireAuth.signInAnonymously();
  }

}