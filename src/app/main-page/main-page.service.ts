import { Injectable } from '@angular/core';
import { CRUDdataService } from '../services/cruddata.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private crudService: CRUDdataService) { }
  postData(data: any){
    return this.crudService.addData(data).subscribe((response)=>{})
  }
}
