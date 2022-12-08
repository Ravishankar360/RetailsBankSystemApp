import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-transaction-withdrawn',
  templateUrl: './transaction-withdrawn.component.html',
  styleUrls: ['./transaction-withdrawn.component.scss']
})
export class TransactionWithdrawnComponent implements OnInit {

  customerid!:any;
  withdrawnForm!: FormGroup ;
  account = new Account();
  transaction = new Transaction();
  transactionData: any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router, private accountService:AccountServiceService
    , private transactionService:TransactionserviceService) { }


  ngOnInit(): void {

    this.customerid = this.route.snapshot.paramMap.get('customerid');
    console.log(this.customerid);
    this.withdrawnForm = this.formBuilder.group({
      accountId: ["", Validators.required],
      balance: ["", Validators.required],
      customerId :[this.customerid],
      accountType :["debit"]
    })
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

  getCustomers() {
    this.router.navigate(['/customerlist']);
  }

  createAccount(){
    this.router.navigate(['/createAccount']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  back(){
    this.router.navigate(['/customerlist']);
  }

  withdrawnAmount(){
    console.log("String "+this.withdrawnForm.value);
    if((this.withdrawnForm.value.accountId !='' && this.withdrawnForm.value.accountId != null)&&
    (this.withdrawnForm.value.balance !='' && this.withdrawnForm.value.balance != null)){
    this.accountService.amountDeposit(this.withdrawnForm.value).subscribe(data=>{
      this.transactionData=data;
      console.log(this.transactionData);
      this.transactionService.withdrawnStatement(this.transactionData).subscribe(data=>{
        alert("Amount Successfully withdrawn !!!");
         this.router.navigate(['/customerlist']);
        },error=>alert("Account Number wrong, Please fill correct data !!!"));
    },error=>alert("Something went wrong"));
   }else{
    alert("Please fill all mandatory field !!");
   }
  }


}
