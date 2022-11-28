import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
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

  logout(){
    this.router.navigate(['/login']);
  }

}
