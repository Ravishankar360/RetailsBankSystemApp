import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
  user: User= new User();
  private baseUrl="http://localhost:8085/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:8085/login",user);
  }

  userRegistration(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:8085/register",user);
  }
  
  getUserListFromRemote(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8085/viewAllUsers');
  }

  getCustomerListFromRemote(): Observable<any>{
    return this.httpClient.get<any>("http://localhost:8086/viewAllCustomers");
  }

  getUserByName(user:User) : Observable<object>{
    return this.httpClient.post('http://localhost:8085/getByUserEmail', user)
  }

  loginUser1(user: User){

    localStorage.setItem("user", user.username);
    return true;
  }

  logoutUser(){
    localStorage.removeItem("user");
  }
  isLoggedIn(){
let user = localStorage.getItem("username");
 if(user==null ||user=='' || user==undefined ){
return false;

 }else{

  return true;
 }
  }
}
