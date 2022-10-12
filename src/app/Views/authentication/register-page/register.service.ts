import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerUserService: AuthService) { }

  postUserData(fromUserdata: any): Observable<any>{
    var response$ = this.registerUserService.registerUser(fromUserdata)
    return response$;
  }
}
