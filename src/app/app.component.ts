import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RetailsBankSystemApp';
  constructor(public dialog: MatDialog) {}
  openDialog1(): void {
    const dialogRef1 = this.dialog.open(UserRegistrationComponent, {
      width: '50%',
      
  });
   
}
}

