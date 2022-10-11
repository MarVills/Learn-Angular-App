import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokenService {
  token_key = 'auth-token';

  constructor() { }
  saveToken(token: string) {
    window.sessionStorage.removeItem(this.token_key);
    window.sessionStorage.setItem(this.token_key, token);
  }
  getToken(){
    return sessionStorage.getItem(this.token_key);
  }

  // logout() {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
  signOut() {
    window.sessionStorage.clear();
  }


}

