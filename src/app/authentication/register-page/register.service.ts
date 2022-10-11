import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { userToken } from 'src/app/services/handle-token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private registerUserService: AuthService,
    private router: Router,
    // private token: userToken,
    ) { }

  token = userToken;

  postUserData(fromUserdata: any){
    // this.registerUserService.registerUser(fromUserdata).subscribe(
    //   {
    //   next: (v) => {
    //     console.log(v.token)
    //     this.token = v.token
    //     setTimeout(()=>{                       
    //       this.router.navigate(['/dashboard']);
    //   }, 3000);
       
    //     return v.token
    //   },
    //   error: (e) => {
    //     return e;
    //   },
    //   complete: () => console.info('complete')
    // });
    this.registerUserService.registerUser(fromUserdata).subscribe(
      (response)=>{
        console.log(response.token)
        this.token = response.token
        // this.saveToken(response.token)
        setTimeout(()=>{                       
          this.router.navigate(['/dashboard']);
      }, 3000);
      }).unsubscribe;
      setTimeout(()=>{                       
        console.log("handleToken: "+this.token)
    }, 3000);
  }
 
}
