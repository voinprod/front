import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { UserService } from '../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { City } from "../models/city";
import { User } from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  constructor(
    private cityService: CityService,
    private userService: UserService,
    private _flashMessagesService: FlashMessagesService,
    ) { }
  
  city: City[];
  user: User[] = [];   
  name:String;
  tasks: String;
  description: String;
  selectedCity: String;
  ngOnInit() {
    this.cityService.getAllCity()
                    .subscribe(data => this.city = data);
  }
    
  addNewUser(){
    let newUser = {
      name: this.name,
      tasks: this.tasks,
      description: this.description,
      city: this.selectedCity,
    }
    this.userService.addNewUser(newUser)
                    .subscribe(() => {
                      this._flashMessagesService.show('Пользователь '+ this.name +' добавлен', { cssClass: 'alert-success', timeout: 3000})
                      this.name = null;
                      this.city = null;
                      this.description = null;
                      this.tasks = null;
                    });
    
  }

}
