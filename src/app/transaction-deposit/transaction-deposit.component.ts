import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { TransactionserviceService } from '../transactionservice.service';
import { Transaction } from '../transaction';


@Component({
  selector: 'app-transaction-deposit',
  templateUrl: './transaction-deposit.component.html',
  styleUrls: ['./transaction-deposit.component.scss']
})
export class TransactionDepositComponent implements OnInit {

  customerid!:any;
  depositForm!: FormGroup ;
  account = new Account();
  transaction = new Transaction();
  transactionData: any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router, private accountService:AccountServiceService
    , private transactionService:TransactionserviceService) { }

  ngOnInit(): void {

    this.customerid = this.route.snapshot.paramMap.get('customerid');
    console.log(this.customerid);
    this.depositForm = this.formBuilder.group({
      accountId: ["", Validators.required],
      balance: ["", Validators.required],
      customerId :[this.customerid],
      accountType :["credit"]
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

  depositAmount(){
    console.log("String "+this.depositForm.value);

    this.accountService.amountDeposit(this.depositForm.value).subscribe(data=>{
      this.transactionData=data;
      console.log(this.transactionData);
      this.transactionService.transactionStatement(this.transactionData).subscribe(data=>{
        alert("Amount Successfully deposit !!!");
         this.router.navigate(['/customerlist']);
        },error=>alert("Account Number wrong, Please fill correct data !!!"));
    },error=>alert("Something went wrong"));
  }


}
