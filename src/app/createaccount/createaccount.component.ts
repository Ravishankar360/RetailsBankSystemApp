import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountServiceService } from '../account-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  accountForm!: FormGroup ;
  account = new Account();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private accountservice: AccountServiceService) { }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      customerId: ["", Validators.required],
      email: ["", Validators.required],
      balance: ["", Validators.required],
      status: ["", Validators.required],
      accountType: ["", Validators.required],
    });
  }

  signUp(){
    this.router.navigate(['/login']);
  }
}
