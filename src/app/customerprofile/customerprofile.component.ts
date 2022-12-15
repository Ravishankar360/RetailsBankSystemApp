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
    this.customers.customerid =this.customerId;
    this.customers.firstname=this.datafirstName;
    this.customers.lastname =this.datalastName;

   this.customerService.featchCustomerProfileFromRemote(customerid).subscribe(
    data=>{
    //alert(data);
      console.log("data received"+data);
      this.customersVo = data; 
    },
      error => console.log("Exception Occured")
    )

  }

  signUp(){
    this.router.navigate(['/login']);
  }

  back(customerid: number){
   // alert("back button :- "+customerid)
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

  getSatementDetails(customerid: number){
    this.customerId = this.actRoute.snapshot.params['customerid'];
    //alert("getSatementDetails() customerId :-"+this.customerId)
     this.router.navigate(['/viewTransaction',customerid]);  
  }

}
