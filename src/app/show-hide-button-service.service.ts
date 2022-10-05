import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowHideButtonServiceService {
  public show:boolean = false;
  public buttonName:any = 'Show';

  // constructor() { }

  toggle(showData: boolean) {
    this.show = !this.show;
    return this.show;
  }
}
