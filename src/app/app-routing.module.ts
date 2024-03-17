import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:"full"},
  {path:'login',component:LoginComponent,pathMatch:"full"},
  {path:'register',component:RegisterComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
