import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AppComponent } from '../app.component';
import { ShowHideButtonServiceService } from '../show-hide-button-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public isShow: ShowHideButtonServiceService) { }

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

 

}
