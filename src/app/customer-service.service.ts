import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customer: Customer= new Customer();
  private baseUrl="http://localhost:8086";

  constructor(private httpClient: HttpClient) { }

  customerRegistration(customer:Customer):Observable<Object>{
    console.log(customer);
    return this.httpClient.post("http://localhost:8086/createCustomer",customer);
  }

  getCustomerListFromRemote(): Observable<any>{
    return this.httpClient.get<any>("http://localhost:8086/viewAllCustomers");
  }
}
