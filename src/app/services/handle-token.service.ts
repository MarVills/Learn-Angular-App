import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokenService {

  constructor() { }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(token);
    window.sessionStorage.setItem(token, token);
  }

}

export const userToken:string = "836|Qf27omIg2hqswwy2Bb8a3hM7dNKMZlASoUYpBFeO";
