import { Injectable } from '@angular/core';
import { RegisterUserService } from '../services/register-user.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private registerUserService: RegisterUserService) { }

  postUserData(fromUserdata: any){
    this.registerUserService.registerUser(fromUserdata).subscribe((response)=>{
      console.log(response)
      // console.log(respo/nse)
      return response;
    });
  }
}
