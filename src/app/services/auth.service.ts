import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken = ""

  constructor(private http: HttpClient) { }
  registerUser(data: any): Observable<any>{
    var response$ = this.http.post<any>(environment.API_URL+'api/register', data);
    return response$;
  }

  loginUser(data: any): Observable<any>{
    var response$ = this.http.post<any>(environment.API_URL+'api/login', data)
    return response$;
  }
}
