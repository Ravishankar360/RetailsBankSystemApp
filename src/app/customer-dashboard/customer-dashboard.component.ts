import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerAccountVo } from '../customer-account-vo';
import { UserLoginServiceService } from '../user-login-service.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  customersVo= new CustomerAccountVo();
  users = new User();

  constructor(private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService,
    private loginservice: UserLoginServiceService) { }

    

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  getDashboard(){
    //const username = localStorage.getItem("username");
    //let customerid = this.route.snapshot.paramMap.get('customerid');
    //let firstname = this.route.snapshot.paramMap.get('firstname');
   //alert("FirstName:-"+username);
    this.router.navigate(['/customerDashboard']);
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

  dataPass(customerVo:CustomerAccountVo){
    alert(customerVo.firstname);
  }

}
