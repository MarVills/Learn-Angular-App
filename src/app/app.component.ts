import { Component, Input, OnInit } from '@angular/core';
import { ShowHideButtonServiceService } from './show-hide-button-service.service';
import { RouterModule,Routes, Router }from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public showHideButtonService: ShowHideButtonServiceService, public router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

  isShow(){
    return this.showHideButtonService.getShow();
  }

  setShow(show: boolean){
    this.showHideButtonService.setShow(show)
  }

  
  

  title = 'routing_app';
}
