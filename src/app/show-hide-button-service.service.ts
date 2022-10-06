import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShowHide } from './showHide';

@Injectable({
  providedIn: 'root'
})
export class ShowHideButtonServiceService {
  constructor() { }
  show:boolean = true;

  setShow(isShow: boolean){
    this.show = !isShow;
  }
  getShow(){
    return this.show;
  }
}
