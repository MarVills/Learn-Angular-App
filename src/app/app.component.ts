import { Component, Input } from '@angular/core';
import { ShowHideButtonServiceService } from './show-hide-button-service.service';
import { ShowHide } from './showHide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  show: boolean = false;

  constructor(public showHideButtonService: ShowHideButtonServiceService) { }
  isShow(){
    return this.showHideButtonService.getShow();
  }

  setShow(show: boolean){
    this.showHideButtonService.setShow(false)
  }
  

  title = 'routing_app';
}
