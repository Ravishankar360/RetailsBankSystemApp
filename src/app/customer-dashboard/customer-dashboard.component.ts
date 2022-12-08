import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerAccountVo } from '../customer-account-vo';
import { UserLoginServiceService } from '../user-login-service.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  customersVo= new CustomerAccountVo();
  users = new User();
  customers = new CustomerAccountVo();
  datafirstName : any;
  datalastName : any;
  customerId : any;
  cusVO:any;

  constructor(private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService,
    private loginservice: UserLoginServiceService, private httpClient: HttpClient,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.datafirstName = this.actRoute.snapshot.params['firstname'];
    this.datalastName = this.actRoute.snapshot.params['lastname'];
    this.customerId = this.actRoute.snapshot.params['customerid'];
    this.customers.customerid =this.customerId;
    this.customers.firstname=this.datafirstName;
    this.customers.lastname =this.datalastName; 

  }

  signUp(){
    this.router.navigate(['/login']);
  }

  getDashboard(customerid: number){
    this.customerService.getByCustomrId(customerid).subscribe(data=>{
      this.customersVo=data;
      console.log(this.customersVo.firstname);
      this.datafirstName=this.customersVo.firstname;
      this.datalastName=this.customersVo.lastname;
      this.cusVO= this.customersVo;
      this.customerService.dataPassValue(this.customersVo)
      this.router.navigate(["/customerDashboard",this.cusVO]); 
    });
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


  getCustomersDetails(customerid: number){
    this.customerId = this.actRoute.snapshot.params['customerid'];
    this.router.navigate(['/customerProfile',customerid]);  
  }

  getSatementDetails(customerid: number){
    this.customerId = this.actRoute.snapshot.params['customerid'];
    //alert("getSatementDetails() customerId :-"+this.customerId)
     this.router.navigate(['/viewTransaction',customerid]);  
  }

  back(customerid: number){
    //alert("back button :- "+customerid)
    this.customerService.getByCustomrId(customerid).subscribe(data=>{
      this.customersVo=data;
      console.log(this.customersVo.firstname);
      this.datafirstName=this.customersVo.firstname;
      this.datalastName=this.customersVo.lastname;
      let cusVO= this.customersVo;
      this.customerService.dataPassValue(this.customersVo)
      this.router.navigate(["/customerDashboard",cusVO]);  
    }); 
  }

  getTransactionByCustomer(customerid: number){
    this.router.navigate(['/custdeposit',customerid]);
  }

  getWithdrawnByCustomer(customerid: number){
    this.router.navigate(['/custwitdrawn',customerid]);
  }


}
