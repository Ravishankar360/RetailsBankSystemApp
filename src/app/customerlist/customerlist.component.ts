import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  users: Array<User> = [];
  constructor( private userloginService:UserLoginServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userloginService.getUserListFromRemote().subscribe(
      data=> this.users=data ,error=>console.log("Exception occurred 1"))
  }isEmpty()
  {
    if (this.users == null)
    {
      return true;
    }
    else { return false; }

  }

  signUp(){
    this.router.navigate(['/login']);
  }

}
