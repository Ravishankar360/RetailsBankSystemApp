import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  account: Account= new Account();
  
  private baseUrl="http://localhost:8087";
  constructor(private httpClient: HttpClient) { }

  AccountRegistration(accountType: string,customerId: any ):Observable<Object>{
    //alert("Test one");
    console.log(accountType);
    console.log(customerId);
    this.account.accountType=accountType;
    this.account.customerId=customerId;
    return this.httpClient.post("http://localhost:8087/createAccount",this.account);
  }
}
