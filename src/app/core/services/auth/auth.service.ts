import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private  http: HttpClient) { }

  login(email: string, password: string){

    const credentials = email+':'+ password;
    const encodedCredentials = btoa(credentials)

    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + encodedCredentials
      })

    return this.http.post<any>(`${environment.baseUrlApi}/user/login`, {}, {headers: headers})

  }
}
