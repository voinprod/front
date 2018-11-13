import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from "../app/guards/auth.guard";

const routes: Routes = [
  {path:'login', component: AuthComponent}, 
  {path:'panel', component: PanelComponent, canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
