import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from "../app/guards/auth.guard";
import { CityComponent } from './city/city.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login', component: AuthComponent}, 
  {path:'panel', component: PanelComponent, canActivate:[AuthGuard]},
  {path:'city/create', component: CityComponent, canActivate:[AuthGuard]},
  {path:'user/create', component: UserComponent, canActivate:[AuthGuard]},
  {path:'rating', component: HomeComponent, canActivate:[AuthGuard]}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
