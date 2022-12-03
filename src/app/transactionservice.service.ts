import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  transaction: Transaction = new Transaction();
  account: Account= new Account();

  private baseUrl="http://localhost:8088";
  constructor(private httpClient: HttpClient) { }

  transactionStatement(transaction:Transaction):Observable<Object>{
    //alert("Test transactionStatement Deposit Account Id:- "+transaction.accountId +": Balance:-"+ transaction.pbalance);
    return this.httpClient.post("http://localhost:8088/Deposit",transaction);
  }

  withdrawnStatement(transaction:Transaction):Observable<Object>{
     //alert("Test transactionStatement Withdrawn Account Id:- "+transaction.accountId +": Balance:-"+ transaction.pbalance);
     return this.httpClient.post("http://localhost:8088/Withdraw",transaction);
   }
}
