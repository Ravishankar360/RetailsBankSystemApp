import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user :User = new User();
  registrationForm!: FormGroup ;
  constructor(private formBuilder:FormBuilder, private userloginService:UserLoginServiceService,private router:Router) { }

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
      role : ['', Validators.required]
  
  })

}

addRegistered(){
  console.log(this.registrationForm.value);
  this.userloginService.userRegistration(this.registrationForm.value).subscribe(data=>{
    alert("User Created Successfully");
    this.router.navigate(["login"]);
  },error=>alert("Something went wrong"));
}

backlogin(){
  this.router.navigate(['/login']);
}

signUp(){
  this.router.navigate(['/login']);
}
}
