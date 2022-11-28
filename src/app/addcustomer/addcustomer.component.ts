import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {

  customerForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      address: ["", Validators.required],
      pan: ["", Validators.required],
      saluatation:['',Validators.required],
      firstname:['',Validators.required],
      middlename:['',],
      lastname:['',Validators.required],
      useremail:['',Validators.required],
      mobilenumber:['',Validators.required],
      city:['',Validators.required],
      postalcode:['',Validators.required],
      status : ['',Validators.required],
      role : ['', Validators.required]
    });
  }

  createCustomer() {
    console.log(this.customerForm.value);
    this.customerService.customerRegistration(this.customerForm.value).subscribe(data=>{
      alert("User Created Successfully");
      this.router.navigate(["customerlist"]);
    },error=>alert("Something went wrong"));
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  back(){
    this.router.navigate(['/customerlist']);
  }

}
