import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from "../models/user";

// Вывожу на главную рейтинг, запрос через API, 
//с помощью populate вывожу инфу по городу

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  users: User[];

  ngOnInit() {
    this.userService.getAllUser()
                    .subscribe(data => this.users = data);
    
  }

}
