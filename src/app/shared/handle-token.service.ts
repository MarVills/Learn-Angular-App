import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokenService {
  token_key = 'auth-token';
  user_key = 'auth-use';
  userLoggedIn = this.getToken() != "" ? true: false ;

  constructor() { }

  saveToken(token: string) {
    window.sessionStorage.removeItem(this.token_key);
    window.sessionStorage.setItem(this.token_key, token);
    localStorage.removeItem(this.token_key);
    localStorage.setItem(this.token_key, token);
  }
  getToken(){
    return sessionStorage.getItem(this.token_key);
  }

  saveUser(user: any) {
    window.sessionStorage.removeItem(this.user_key);
    window.sessionStorage.setItem(this.user_key, JSON.stringify(user));
    localStorage.removeItem(this.user_key);
    localStorage.setItem(this.user_key, JSON.stringify(user));

  }

  getUser() {
    return JSON.parse(sessionStorage.getItem(this.user_key) || '{}');
  }

  // logout() {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
  signOut() {
    window.sessionStorage.clear();
    localStorage.clear();
    // window.location.reload();
  }


}

