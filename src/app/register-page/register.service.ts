import { Injectable } from '@angular/core';
import { RegisterUserService } from '../services/register-user.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerUserService: RegisterUserService) { }

  postUserData(fromUserdata: any){
    return this.registerUserService.registerUser(fromUserdata).subscribe({
      // return response;
      next: (v) => console.log(v),
      error: (e) => {
        return e;
      },
      complete: () => console.info('complete')
    })
  }
}
