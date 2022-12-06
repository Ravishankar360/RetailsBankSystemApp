import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { CustomerAccountVo } from '../customer-account-vo';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-viewtransactioncustomer',
  templateUrl: './viewtransactioncustomer.component.html',
  styleUrls: ['./viewtransactioncustomer.component.scss']
})
export class ViewtransactioncustomerComponent implements OnInit {

  customersVo = new CustomerAccountVo();
  customers = new CustomerAccountVo();
  transaction = new Transaction();
  transactions: Array<Transaction> =[];
  datafirstName: any;
  datalastName: any;
  customerId: any;
  source: any;
  constructor(private transactionService:TransactionserviceService
    ,private router:Router, private customerService: CustomerServiceService
    ,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.source=this.actRoute.snapshot.queryParamMap.get('source')
    //let customersVo = this.actRoute.snapshot.paramMap.get('cusVO');
    //let customersVo1 = this.actRoute.snapshot.paramMap.get('cusVO');
    //alert(customersVo);
    let customerid = this.actRoute.snapshot.paramMap.get('customerid');
    console.log(customerid);
    this.datafirstName = this.actRoute.snapshot.params['firstname'];
    this.datalastName = this.actRoute.snapshot.params['lastname'];
    this.customerId = this.actRoute.snapshot.params['customerid'];
    this.customers.customerid =this.customerId;
    this.customers.firstname=this.datafirstName;
    this.customers.lastname =this.datalastName;
    //var id : number= +customerid;
    this.getTransaction(customerid);
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  getTransaction(customerid:any) {
    //alert("getTransaction() : "+customerid);
    this.transactionService.featchTransactionStatement(Number(customerid)).subscribe(
      data=> this.transactions=data ,error=>console.log("Exception occurred 1"))
  }isEmpty1()
  {
    if (this.transactions == null)
    {
      return true;
    }
    else { return false; }
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
      this.router.navigate(["/customerDashboard",cusVO],{queryParams:{source:'Application'}});  
    });
  }

}
