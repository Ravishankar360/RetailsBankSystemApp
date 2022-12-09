import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  users: Array<User> = [];
  customers: Array<Customer> =[];
  constructor( private userloginService:UserLoginServiceService,private customerService:CustomerServiceService
    ,private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getTransaction(){
    this.router.navigate(['/deposit']);
  }

  getWithdrawn(){
    this.router.navigate(['/witdrawn']);
  }
  getUsers() {
    this.userloginService.getUserListFromRemote().subscribe(
      data=> this.users=data ,error=>console.log("Exception occurred 1"))
  }isEmpty()
  {
    if (this.users == null)
    {
      return true;
    }
    else { return false; }

  }

  getCustomers() {
    this.customerService.getCustomerListFromRemote().subscribe(
      data=> this.customers=data ,error=>console.log("Exception occurred 1"))
  }isEmpty1()
  {
    if (this.customers == null)
    {
      return true;
    }
    else { return false; }

  }

  signUp(){
    this.router.navigate(['/login']);
  }

  addCustomer(){
    this.router.navigate(['/addCustomer']);
  }

  getDashboard(){
    this.router.navigate(['/dashboard']);
  }

  getCustomersList() {
    this.router.navigate(['/customerlist']);
  }

  createAccount(){
    this.router.navigate(['/createAccount']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  goToViewCustomer(customerid: number){
    console.log("customerid: "+ customerid);
    //alert("customerid :- "+customerid);
    this.router.navigate(['/viewCustomer', customerid])
  }

  depositAmmount(customerid: number){
    console.log("customerid: "+ customerid);
    //alert("customerid :- "+customerid);
    this.router.navigate(['/deposit', customerid])
  }

}
