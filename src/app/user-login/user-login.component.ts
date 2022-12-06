import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerAccountVo } from '../customer-account-vo';
import { UserLoginServiceService } from '../user-login-service.service';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';

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
  userLogin !: FormGroup;
  reposne: any;
  reposnes: any;
  customersVo: any;
  
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

  loginUser(){
    console.log(this.user);
    localStorage.setItem("username", this.user.username)
    if(this.userLogin.value.role=='Employee'){
     this.loginService.loginUser(this.userLogin.value).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      alert("Login Successfully !!!");
      this.customerService.getByEmail(this.userLogin.value).subscribe(data=>{
        this.customersVo=data;
        let userVO= this.customersVo;
         this.customerService.dataPassValue(this.customersVo)  
          this.router.navigate(["/dashboard",userVO]);
      });
      console.log("User Name:-"+this.userLogin.value.username);
     },error=>alert("Please enter correct username and password"));
   } else if(this.userLogin.value.role=='Customer'){
    this.loginService.loginUser(this.userLogin.value).subscribe(data=>{
      this.reposne = data;
      console.log(this.reposne.token);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.reposne.token}`);
      alert("Login Successfully !!!");
      console.log("User Name:-"+this.userLogin.value.username);
      this.customerService.getByEmail(this.userLogin.value).subscribe(data=>{
        this.customersVo=data;
        console.log(this.customersVo.firstname);
        let cusVO= this.customersVo;
         this.customerService.dataPassValue(this.customersVo)
          this.router.navigate(["/customerDashboard",cusVO]);  
      });
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
