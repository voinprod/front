import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import { HttpModule } from '@angular/http';
import { AuthService } from "./services/auth.service";
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from "../app/guards/auth.guard";
import { NavbarComponent } from './navbar/navbar.component';
import { CityComponent } from './city/city.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PanelComponent,
    NavbarComponent,
    CityComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    HttpModule,
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
