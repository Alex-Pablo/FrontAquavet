import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, map, pipe, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);
  
  constructor( private  http: HttpClient, private route :Router) { }

  login(email: string, password: string){

    // const credentials = email+':'+ password;
    // const encodedCredentials = btoa(credentials)

    // const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': 'Basic ' + encodedCredentials
    //   })

    return this.http.post<any>(`${environment.baseUrlApi}/user/login`, {Email : email, Password: password})
      .pipe(tap(user => {
        if (user.isSucess) {
          sessionStorage.setItem('CurrentUser', JSON.stringify(user.value.token));
          this.isAuth.next(true);
        }
      }))
  }

  logout(){
    if(this.getToken != null){
      sessionStorage.removeItem('CurrentUser');
      this.isAuth.next(false);
      this.route.navigate(['/auth/login']);
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken()
    if (token) {
      this.isAuth.next(true);
      return true;
    }
    return false;
  }

  getToken(){
    return sessionStorage.getItem('CurrentUser');
  }


}
