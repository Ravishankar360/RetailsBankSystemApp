import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CustomerAccountVo } from './customer-account-vo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customer: Customer= new Customer();
  customerVo: Customer= new CustomerAccountVo();
  private baseUrl="http://localhost:8086";
  dataPass: any;
  customers : any;

  constructor(private httpClient: HttpClient,private router: Router) { }

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

  dataPassValue(customerVo:any){
   //("dataPassValue:- "+customerVo.firstname);
   this.customers=customerVo;
   console.log(""+this.customers);
  // this.router.navigate(['/customerDashboard']);
  }

  dataPassValueWithId(customerVo:any){
    alert("dataPassValue:- "+customerVo.firstname);
    this.customers=customerVo;
    console.log(""+this.customers);
   // this.router.navigate(['/customerDashboard']);
   }

 featchCustomerProfileFromRemote(customerId: any) : Observable<any>{
 // alert("featchCustomerProfileFromRemote CustomerID:- "+customerId);
  return this.httpClient.get<any>('http://localhost:8086/viewAllCustomerById/' + customerId);
 }

 getByUserId(customerId: any) : Observable<any>{
   alert("getByUserId CustomerID:- "+customerId);
   return this.httpClient.get<any>('http://localhost:8086/viewAllUserById/' + customerId);
  }

 getByCustomrId(customerId: any) : Observable<any>{
   //alert("getByCustomrId CustomerID:- "+customerId);
   return this.httpClient.get<any>('http://localhost:8086/viewAllCustomerById/' + customerId);
 }
  
}
