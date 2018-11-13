import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flsemessage: FlashMessagesService) { }

  ngOnInit() {
  
  }

  login: String;
  password: String;

  loginAdmin(){
    let admin = {
      login: this.login,
      password: this.password,
    }  
  this.authService.authAdmin(admin).subscribe(data => {
    if(data.token){
      this.authService.storeAdminToken(data.token);
      this.router.navigate(['/panel']);
    }else{
      this.flsemessage.show('Invalid data');
    }
  });
  }
}
