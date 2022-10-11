import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { userToken } from './handle-token.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDdataService {

  token= userToken;

  constructor(
    private http: HttpClient,
    ) { }
  config = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.token})
  }
  
  getDataList(): Observable<any>{
    console.log("token used: "+this.token)
    var resposne$ = this.http.get<any>(environment.API_URL + 'api/products', this.config);
    return resposne$;
  }
  getData(id: number): Observable<any>{
    var resposne$ = this.http.get<any>(environment.API_URL + `api/products/${id}`, this.config);
    return resposne$;
  }
  deleteData(id: number): Observable<any>{
    var resposne$ = this.http.delete<any>(environment.API_URL + `api/products/${id}`, this.config);
    return resposne$;
  }
  addData(data: any): Observable<any>{
    var resposne$ = this.http.post<any>(environment.API_URL + 'api/products', data, this.config);
    return resposne$;
  }
  updateData(id: number, data:any): Observable<any>{
    var resposne$ = this.http.put<any>(environment.API_URL + `api/products/${id}`, data, this.config);
    return resposne$;
  }
  
}
