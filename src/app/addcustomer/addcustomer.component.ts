import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  customerId!:any;
  customerForm!: FormGroup ;

  customers = new Customer();
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService,private accountService: AccountServiceService) { }

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
      role : ['', Validators.required],
      accountType: ['',Validators.required]
    });
  }

  createCustomer() {
    console.log("String "+this.customerForm.value);
    if((this.customerForm.value.saluatation !='' && this.customerForm.value.saluatation != null)&&
  (this.customerForm.value.firstname !='' && this.customerForm.value.firstname != null)
  && (this.customerForm.value.lastname !='' && this.customerForm.value.lastname != null)
  && (this.customerForm.value.dateOfBirth !='' && this.customerForm.value.dateOfBirth != null)
  && (this.customerForm.value.username !='' && this.customerForm.value.username != null)
  && (this.customerForm.value.useremail !='' && this.customerForm.value.useremail != null)
  && (this.customerForm.value.password !='' && this.customerForm.value.password != null)
  && (this.customerForm.value.mobilenumber !='' && this.customerForm.value.mobilenumber != null)
  && (this.customerForm.value.address !='' && this.customerForm.value.address != null)
  && (this.customerForm.value.city !='' && this.customerForm.value.city != null)
  && (this.customerForm.value.postalcode !='' && this.customerForm.value.postalcode != null)
  && (this.customerForm.value.status !='' && this.customerForm.value.status != null)
  && (this.customerForm.value.role !='' && this.customerForm.value.role != null)
  && (this.customerForm.value.accountType !='' && this.customerForm.value.accountType != null)
  && (this.customerForm.value.dateOfBirth !='' && this.customerForm.value.dateOfBirth != null)
  && (this.customerForm.value.pan !='' && this.customerForm.value.pan != null)){
    this.customerService.customerRegistration(this.customerForm.value).subscribe(data=>{
      (data: Customer)=> this.customers=data;
      console.log(data);
      this.customerId = data;
      console.log("Customer Id :-"+this.customerId);
      console.log("AccountType:-" +this.customerForm.value.accountType);
      this.accountService.AccountRegistration(this.customerForm.value.accountType,this.customerId).subscribe(data=>{
      alert("User BankAccount Created Successfully");
      },error=>alert("Something went wrong"));
      //alert("User Created Successfully")
      this.router.navigate(["customerlist"]);
    },error=>alert("Something went wrong"));
   }else{
    alert("Please fill all mandatory field !!");
   }
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  back(){
    this.router.navigate(['/customerlist']);
  }

  getDashboard(){
    this.router.navigate(['/dashboard']);
  }

  getCustomers() {
    this.router.navigate(['/customerlist']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  addCustomers(){
    this.router.navigate(['/addCustomer']);
  }

}
