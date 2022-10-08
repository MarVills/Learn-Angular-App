import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AppComponent } from '../app.component';
import { ShowHideButtonServiceService } from '../services/show-hide-button-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-first',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public isShow: ShowHideButtonServiceService, private authService: AuthService) { }

  show?: boolean;

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getShow(){
    return this.isShow.getShow();
  }

  setShow(show: boolean){
     return this.isShow.setShow(show)
  }

  onLogin(data:any){
    this.authService.loginUser(data).subscribe((response)=>{
      console.log(response)
    })

  }

  // 1012|PXclZAUT0pNgs3einBLsFLfzdun6W6Cvl79yHm6C

}
