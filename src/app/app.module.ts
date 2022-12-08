import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCustdetailsComponent } from './view-custdetails/view-custdetails.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { TransactionDepositComponent } from './transaction-deposit/transaction-deposit.component';
import { TransactionWithdrawnComponent } from './transaction-withdrawn/transaction-withdrawn.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { ViewtransactioncustomerComponent } from './viewtransactioncustomer/viewtransactioncustomer.component';
import { CustomerDepositComponent } from './customer-deposit/customer-deposit.component';
import { CustomerWithDrawnComponent } from './customer-with-drawn/customer-with-drawn.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    DashboardComponent,
    ViewCustdetailsComponent,
    CreateaccountComponent,
    CustomerDashboardComponent,
    TransactionDepositComponent,
    TransactionWithdrawnComponent,
    CustomerprofileComponent,
    ViewtransactioncustomerComponent,
    CustomerDepositComponent,
    CustomerWithDrawnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatMenuModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
