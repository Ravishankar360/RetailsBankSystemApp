import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  getDashboard(){
    this.router.navigate(['/customerDashboard']);
  }

  getCustomers() {
    this.router.navigate(['/customerlist']);
  }

  logout(){
    this.router.navigate(['/login']);
  }

  addCustomers(){
    this.router.navigate(['/addCustomer']);
  }

}
