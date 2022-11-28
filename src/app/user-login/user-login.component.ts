import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  user: User= new User();
  userLogin !: FormGroup;
  reposne: any;
  constructor(private loginService: UserLoginServiceService, private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      roleType : ['',Validators.required],
      userName : ['',Validators.required],
      password : ['',Validators.required]
    })
  } 

  userlogin(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      console.log(headers);
      alert("Login Successfully !!!");
      this.router.navigate(["/dashboard"]);
    },error=>alert("Please enter correct username and password"));
  }

  login(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      console.log(headers);
      alert("Login Successfully !!!");
      this.router.navigate(["/dashboard"]);
    },error=>alert("Please enter correct username and password"));
  }
  
  registrationUser(){
    this.router.navigate(['/registration']);
  }

  signUp(){
    this.router.navigate(['/login']);
  }
}
