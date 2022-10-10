import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerUserService: AuthService) { }

  postUserData(fromUserdata: any){
    return this.registerUserService.registerUser(fromUserdata).subscribe({
      // return response;
      next: (v) => {
        console.log(v.token)
      },
      error: (e) => {
        return e;
      },
      complete: () => console.info('complete')
    })
  }
}
