import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CustomerAccountVo } from './customer-account-vo';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customer: Customer= new Customer();
  customerVo: Customer= new CustomerAccountVo();
  private baseUrl="http://localhost:8086";

  constructor(private httpClient: HttpClient) { }

  customerRegistration(customer:Customer):Observable<Object>{
    console.log(customer);
    return this.httpClient.post("http://localhost:8086/createCustomer",customer);
  }


  getCustomerListFromRemote(): Observable<any>{
    return this.httpClient.get<any>("http://localhost:8086/viewAllCustomers");
  }

  featchCustomerByIdFromRemote(customerid: number) : Observable<any>{
    //alert("CustomerService CustomerID:-"+customerid);
    return this.httpClient.get<any>('http://localhost:8086/viewAllCustomerById/' + customerid);
  }

  getByEmail(customer:Customer):Observable<Object>{
    console.log(customer);
    return this.httpClient.post("http://localhost:8086/getFindByEmail",customer);
  }

  // dataPass(customerVo:CustomerAccountVo):Observable<Object>{
  //   alert(customerVo.firstname);
  //   return this.httpClient.get(""+customerVo.firstname);
  // }
  
}
