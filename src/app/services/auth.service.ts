import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(data: any){
    return this.http.post<any>(environment.API_URL+'api/register', data)
  }

  loginUser(data: any){
    return this.http.post<any>(environment.API_URL+'api/login', data)
  }
}
