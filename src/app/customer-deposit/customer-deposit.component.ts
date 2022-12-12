import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { Transaction } from '../transaction';
import { TransactionserviceService } from '../transactionservice.service';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerAccountVo } from '../customer-account-vo';

@Component({
  selector: 'app-customer-deposit',
  templateUrl: './customer-deposit.component.html',
  styleUrls: ['./customer-deposit.component.scss']
})
export class CustomerDepositComponent implements OnInit {

  customerid!:any;
  depositCustomerForm!: FormGroup ;
  account = new Account();
  transaction = new Transaction();
  customersVo = new CustomerAccountVo();
  customers = new CustomerAccountVo();
  transactionData: any;
  datafirstName: any;
  datalastName: any;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router, private accountService:AccountServiceService
    , private transactionService:TransactionserviceService,
    private customerService:CustomerServiceService,
    private actRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.customerid = this.route.snapshot.paramMap.get('customerid');
    console.log(this.customerid);
    this.datafirstName = this.actRoute.snapshot.params['firstname'];
    this.datalastName = this.actRoute.snapshot.params['lastname'];
    this.customers.customerid =this.customerid;
    this.customers.firstname=this.datafirstName;
    this.customers.lastname =this.datalastName;
    this.depositCustomerForm = this.formBuilder.group({
      accountId: ["", Validators.required],
      balance: ["", Validators.required],
      customerId :[this.customerid],
      accountType :["credit"]
    })
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  back(customerid: number){
    this.customerService.getByCustomrId(customerid).subscribe(data=>{
      this.customersVo=data;
      console.log(this.customersVo.firstname);
      this.datafirstName=this.customersVo.firstname;
      this.datalastName=this.customersVo.lastname;
      let cusVO= this.customersVo;
      //this.customerService.dataPassValue(this.customersVo)
      this.router.navigate(["/customerDashboard",cusVO],{queryParams:{source:'Application'}});  
    });
  }

  depositAmount(){
    console.log("String "+this.depositCustomerForm.value);
    if((this.depositCustomerForm.value.accountId !='' && this.depositCustomerForm.value.accountId != null)&&
    (this.depositCustomerForm.value.balance !='' && this.depositCustomerForm.value.balance != null)){
      if(this.depositCustomerForm.value.balance <=50001 && this.depositCustomerForm.value.balance >0){
       this.accountService.amountDeposit(this.depositCustomerForm.value).subscribe(data=>{
      this.transactionData=data;
      console.log(this.transactionData);
      this.transactionService.transactionStatement(this.transactionData).subscribe(data=>{
        alert("Amount Successfully deposit !!!");
        this.customerService.getByCustomrId(this.customerid).subscribe(data=>{
          this.customersVo=data;
          console.log(this.customersVo.firstname);
          this.datafirstName=this.customersVo.firstname;
          this.datalastName=this.customersVo.lastname;
          let cusVO= this.customersVo;
          this.router.navigate(["/customerDashboard",cusVO],{queryParams:{source:'Application'}});  
        });
        },error=>alert("Account Number wrong, Please fill correct data !!!"));
    },error=>alert("Something went wrong"));
    }else{
     alert("Please enter amount only deposit amount betwen 1 to 50000 !!!");
    }
   }else{
    alert("Please fill all mandatory field !!");
   }
  }


}
