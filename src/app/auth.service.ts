import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn():boolean {

    const token = localStorage.getItem('token'); // get token from local storage
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
}
