import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

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

  users = new User();
  user: User= new User();
  customers: Array<Customer> =[];
  userLogin !: FormGroup;
  reposne: any;
  reposnes: any;
  customer= new Customer();
  
  constructor(private loginService: UserLoginServiceService,
     private router: Router,private formBuilder:FormBuilder,
     private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      role : ['',Validators.required],
      username : ['',Validators.required],
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
      console.log("First Name:-"+this.user.username);
      alert("Login Successfully !!!");
      this.router.navigate(["/dashboard"]);
    },error=>alert("Please enter correct username and password"));
  }

  login(){
    console.log(this.user);
    if(this.userLogin.value.role=='Employee'){
     this.loginService.loginUser(this.userLogin.value).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      console.log(headers);
      alert("Login Successfully !!!");
      console.log("First Name:-"+this.userLogin.value.username);
      this.router.navigate(["/dashboard"]);
     },error=>alert("Please enter correct username and password"));
   } else if(this.userLogin.value.role=='Customer'){
    this.loginService.loginUser(this.userLogin.value).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      alert("Login Successfully !!!");
      console.log("First Name:-"+this.userLogin.value.username);
      this.customerService.getByEmail(this.userLogin.value).subscribe(data=>{
        console.log(data);
        (data: Customer)=>this.customer=data;
      });
      this.router.navigate(["/customerDashboard"]);
    },error=>alert("Please enter correct username and password"));
   }else{
     alert("Please fill all mandatory field !!!");
     this.router.navigate(["/login"]);
   }
  }
  
  registrationUser(){
    this.router.navigate(['/registration']);
  }

  signUp(){
    this.router.navigate(['/login']);
  }
}
