import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


  constructor( private  http: HttpClient ) { }

  getAll(service:string) {
    return this.http.get<any>(`${environment.baseUrlApi}/${service}`)
  }
  

  getFirstOrDefault(service:string){
    return this.http.get<any>(`${environment.baseUrlApi}/${service}`)
  }

  getById(service:string, id:string){
    return this.http.get<any>(`${environment.baseUrlApi}/${service}/${id}`)
  }

  getbyQuey(service:string, query:string){
    return this.http.get<any>(`${environment.baseUrlApi}/${service}?query=${query}`)
  }

}
