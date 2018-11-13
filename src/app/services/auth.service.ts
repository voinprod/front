import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  authToken: string;

  authAdmin(user: Object): Observable<any>{
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/signin', user, {headers: header})
            .pipe(map(data => data.json()));
  }
  storeAdminToken(token){
    localStorage.setItem('access_token', token);
    this.authToken = token;
  }


  // Метод для обработки в guard, проверяем наличие токена
  loggedIn() {
    if (localStorage.access_token == undefined) {
      return false;
    } else {
      const helper = new JwtHelperService();
      return true; 
    }
  }
  


  logoutAdmin(){
    localStorage.clear();
    this.authToken = null;
  }
}
