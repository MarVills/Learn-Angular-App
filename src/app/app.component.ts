import { Component, Input } from '@angular/core';
import { ShowHideButtonServiceService } from './show-hide-button-service.service';
import { ShowHide } from './showHide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show:boolean = false;
  public buttonName:any = 'Show';
  @Input() showHide?: ShowHide;

  constructor(public showHideButtonService: ShowHideButtonServiceService) { }
  

  title = 'routing_app';
}
