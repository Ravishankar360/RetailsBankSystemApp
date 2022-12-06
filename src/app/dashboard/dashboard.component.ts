import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  datafirstName : any;
  datalastName : any;

  constructor(private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.datafirstName = this.actRoute.snapshot.params['firstname'];
    this.datalastName = this.actRoute.snapshot.params['lastname'];

  }

  signUp(){
    this.router.navigate(['/login']);
  }

  getDashboard(){
    this.router.navigate(['/dashboard']);
  }

  getCustomers() {
    this.router.navigate(['/customerlist']);
  }

  getTransaction(){
    this.router.navigate(['/deposit']);
  }

  getWithdrawn(){
    this.router.navigate(['/witdrawn']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  addCustomers(){
    this.router.navigate(['/addCustomer']);
  }

}
