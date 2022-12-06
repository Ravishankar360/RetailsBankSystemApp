import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerAccountVo } from '../customer-account-vo';

@Component({
  selector: 'app-view-custdetails',
  templateUrl: './view-custdetails.component.html',
  styleUrls: ['./view-custdetails.component.scss']
})
export class ViewCustdetailsComponent implements OnInit {
  customersVo = new CustomerAccountVo();  
  constructor(private customerService:CustomerServiceService
    ,private router:Router
    ,private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let customerid = this._activatedRouter.snapshot.paramMap.get('customerid');
    console.log(customerid);
   this.customerService.featchCustomerByIdFromRemote(Number(customerid)).subscribe(
    data=>{
      console.log("data received");
      this.customersVo = data;
    },
      error => console.log("Exception Occured")
    )
  }


  signUp(){
    this.router.navigate(['/login']);
  }

  getCustomersList() {
    this.router.navigate(['/customerlist']);
  }


}
