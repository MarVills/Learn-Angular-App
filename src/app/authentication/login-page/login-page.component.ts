import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ShowHideButtonServiceService } from '../../services/show-hide-button-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-first',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ) { }
  ngOnInit(): void {this.registerForm()}

 _loginForm!: FormGroup; 

  registerForm(){
    this._loginForm = this.formBuilder.group({
      email:  new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(3)]),
     });
  }
  
  onLogin(){
    this.authService.loginUser(this._loginForm.value).subscribe((response)=>{
      console.log(response)
    })
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) 
  //     return 'You must enter a value';
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
