import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    ) { }
  ngOnInit(): void {this.registerForm();}
  _registerForm!: FormGroup; 

  registerForm(){
    this._registerForm = this.formBuilder.group({
      name: ["",Validators.required],
      email:  new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(3)]),
      password_confirmation: new FormControl("",[Validators.required, Validators.minLength(3)]),
     });
  }

  onRegister(){
    this.registerService.postUserData(this._registerForm.value);

  }

}

