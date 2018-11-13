import { Component, OnInit } from '@angular/core';
import { City } from "../models/city";
import { CityService } from '../services/city.service';
import { FlashMessagesService } from 'angular2-flash-messages';

//Работа с городом, вывод и добавление

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService,
    private _flashMessagesService: FlashMessagesService,
    ) { }

  cities: City[] = [];
  name: City;
  ngOnInit() {
    this.cityService.getAllCity()
          .subscribe(data => this.cities = data);
  }

  addNewCity(){
    this.cityService.addNewCity({name: this.name})
                    .subscribe((data) => {
                      this.cities.push(data);
                      this._flashMessagesService.show('Город добавлен', { cssClass: 'alert-success', timeout: 5000});
                      this.name = null;
                    });
    
  }

}
