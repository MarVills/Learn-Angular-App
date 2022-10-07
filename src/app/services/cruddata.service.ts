import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CRUDdataService {

  constructor(private http: HttpClient) { }
  config = {
    headers: new HttpHeaders({'Authorization': `Bearer 836|Qf27omIg2hqswwy2Bb8a3hM7dNKMZlASoUYpBFeO`})
  }

  getDataList(){
    return this.http.get<any>(environment.API_URL + 'api/products', this.config);
  }
  getData(id: number){
    return this.http.get<any>(environment.API_URL + `api/products/${id}`, this.config);
  }
  deleteData(id: number){
    return this.http.delete<any>(environment.API_URL + `api/products/${id}`, this.config);
  }
  addData(data: any){
    return this.http.post<any>(environment.API_URL + 'api/products', data, this.config);
  }
  // getProducts(){
  //   return this.http.get<any>(environment.API_URL + 'api/products', this.config);
  // }
}
