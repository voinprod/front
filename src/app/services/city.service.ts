import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { City } from '../models/city';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: Http) { }

  addNewCity(city): Observable<City>{
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/cities/create', city, {headers: header})
                    .pipe(map(res => res.json()));
                    
  }

  getAllCity(): Observable<City[]>{
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/cities', {headers: header})
                    .pipe(map((res) => res.json()));
  }
}
