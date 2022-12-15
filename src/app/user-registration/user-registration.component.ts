import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { CustomerServiceService } from '../customer-service.service';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  customerId!:any;
  user :User = new User();
  registrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder, private userloginService:UserLoginServiceService,
    private router:Router,private customerService: CustomerServiceService,private accountService:AccountServiceService) { }

  ngOnInit(): void {
    this.registrationForm= this.formBuilder.group({
      saluatation:['',Validators.required],
      firstname:['',Validators.required],
      middlename:['',],
      lastname:['',Validators.required],
      username:['',Validators.required],
      useremail:['',Validators.required],
      password:['',Validators.required],
      mobilenumber:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      postalcode:['',Validators.required],
      status : ['',Validators.required],
      role : ['', Validators.required],
      accountType: ['',Validators.required],
      dateOfBirth: ["", Validators.required],
      pan: ["", Validators.required],
  
  })

}

addRegistered(){
  console.log(this.registrationForm.value);
  if((this.registrationForm.value.saluatation !='' && this.registrationForm.value.saluatation != null)&&
  (this.registrationForm.value.firstname !='' && this.registrationForm.value.firstname != null)
  && (this.registrationForm.value.lastname !='' && this.registrationForm.value.lastname != null)
  && (this.registrationForm.value.dateOfBirth !='' && this.registrationForm.value.dateOfBirth != null)
  && (this.registrationForm.value.username !='' && this.registrationForm.value.username != null)
  && (this.registrationForm.value.useremail !='' && this.registrationForm.value.useremail != null)
  && (this.registrationForm.value.password !='' && this.registrationForm.value.password != null)
  && (this.registrationForm.value.mobilenumber !='' && this.registrationForm.value.mobilenumber != null)
  && (this.registrationForm.value.address !='' && this.registrationForm.value.address != null)
  && (this.registrationForm.value.city !='' && this.registrationForm.value.city != null)
  && (this.registrationForm.value.postalcode !='' && this.registrationForm.value.postalcode != null)
  && (this.registrationForm.value.status !='' && this.registrationForm.value.status != null)
  && (this.registrationForm.value.role !='' && this.registrationForm.value.role != null)
  && (this.registrationForm.value.accountType !='' && this.registrationForm.value.accountType != null)
  && (this.registrationForm.value.dateOfBirth !='' && this.registrationForm.value.dateOfBirth != null)
  && (this.registrationForm.value.pan !='' && this.registrationForm.value.pan != null)){
  this.userloginService.userRegistration(this.registrationForm.value).subscribe(data=>{
   // alert("Customer Role :- "+this.registrationForm.value.role)
    if(this.registrationForm.value.role=='Customer'){
      this.customerService.customerRegistration(this.registrationForm.value).subscribe(data=>{
        this.customerId = data;
        //console.log("Customer Id :-"+this.customerId);
        //console.log("AccountType:-" +this.registrationForm.value.accountType);
        this.accountService.AccountRegistration(this.registrationForm.value.accountType,this.customerId).subscribe(data=>{
          alert("Customer BankAccount Created Successfully !!");
          this.router.navigate(["login"]);
          },error=>alert("Something went wrong"));
      },error=>alert("Something went wrong"));
    }else{
      alert("Employee BankAccount Created Successfully !!");
      this.router.navigate(["login"]);
    }
    this.router.navigate(["login"]);
  },error=>alert("Something went wrong"));
 }else{
    alert("Please fill all mandatory field !!");
 }
}

backlogin(){
  this.router.navigate(['/login']);
}

signUp(){
  this.router.navigate(['/login']);
}
}
