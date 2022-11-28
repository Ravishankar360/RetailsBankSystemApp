import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'customerlist', component: CustomerlistComponent},
  {path: 'addCustomer', component: AddcustomerComponent},
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
