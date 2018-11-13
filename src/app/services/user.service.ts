import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  addNewUser(user): Observable<User>{
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/create', user, {headers: header})
                    .pipe(map(res => res.json()));
                    
  }

  getAllUser(): Observable<User[]>{
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users', {headers: header})
                    .pipe(map((res) => res.json()));
  }
}
