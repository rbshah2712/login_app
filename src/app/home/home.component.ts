import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authservice : AuthService,private router: Router){

  }

  logout(){
    this.authservice.isLoggedOut();
    this.router.navigate(["login"])
  }
}
