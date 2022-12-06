import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerAccountVo } from '../customer-account-vo';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {

  customersVo = new CustomerAccountVo();  
  customers = new CustomerAccountVo();
  datafirstName: any;
  datalastName: any;
  customerId: any;
  constructor(private customerService:CustomerServiceService
    ,private router:Router
    ,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let customerid = this.actRoute.snapshot.paramMap.get('customerid');
    console.log(customerid);

    this.datafirstName = this.actRoute.snapshot.params['firstname'];
    this.datalastName = this.actRoute.snapshot.params['lastname'];
    this.customerId = this.actRoute.snapshot.params['customerid'];
    //var id : number= +customerid;
    alert(this.customerId);
   this.customerService.featchCustomerProfileFromRemote(this.customerId).subscribe(
    data=>{
      alert(data);
      console.log("data received");
      this.customersVo = data;
      
    },
      error => console.log("Exception Occured")
    )

  }

  signUp(){
    this.router.navigate(['/login']);
  }


}
