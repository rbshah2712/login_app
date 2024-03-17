import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from '../models/countries';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  countries : Countries[] | undefined;
  selectedValue = '';
  selectedYear: number | undefined;
  years: number[] = [];  
  
  public signUpForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 

  this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1950; year--) {
      this.years.push(year);
    }
  }

  ngOnInit(): void {

    this.http.get<any>("http://localhost:3000/countries")
    .subscribe(response=>{
      
      this.countries = response;
    });

    this.signUpForm = this.formBuilder.group({
      email: ["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["", Validators.required],
      repeatpassword:["", Validators.required],
      birthyear: ["", Validators.required],
      country: ["", Validators.required]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/users",this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
  }
}
