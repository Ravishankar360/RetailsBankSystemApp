import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCustdetailsComponent } from './view-custdetails/view-custdetails.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { TransactionDepositComponent } from './transaction-deposit/transaction-deposit.component';
import { TransactionWithdrawnComponent } from './transaction-withdrawn/transaction-withdrawn.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'customerlist', component: CustomerlistComponent},
  {path: 'addCustomer', component: AddcustomerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'viewCustomer/:customerid', component: ViewCustdetailsComponent},
  {path: 'createAccount', component: CreateaccountComponent},
  {path: 'customerDashboard', component: CustomerDashboardComponent},
  {path: 'deposit/:customerid', component: TransactionDepositComponent},
  {path: 'deposit', component: TransactionDepositComponent},
  {path: 'witdrawn/:customerid', component: TransactionWithdrawnComponent},
  {path: 'witdrawn', component: TransactionWithdrawnComponent},
  {path: 'customerDashboard/:cusVO', component: CustomerDashboardComponent},
  {path: 'dashboard/:userVO', component: DashboardComponent},
  {path: 'customerProfile/:customerid', component: CustomerprofileComponent},
  {path: 'customerProfile', component: CustomerprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
