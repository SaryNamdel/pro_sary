import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SignCustomerComponent } from '../sign-customer/sign-customer.component';
import { SpeakWithBotComponent } from '../speak-with-bot/speak-with-bot.component';
import { SignRenterComponent } from '../sign-renter/sign-renter.component';
import { MatDialog } from '@angular/material/dialog';
import { RenterStatus } from '../../statusEnum';
import { RenterService } from '../services/renter.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  router = inject(Router);
  renterService = inject(RenterService);
  readonly dialog = inject(MatDialog)
  status: RenterStatus = this.renterService.getStatus()


  openDialogSignRenter() {
    this.dialog.open(SignRenterComponent);
    let dialogRef: any;
    // dialogRef.afterClosed().subscribe(() => {
    //   this.renterService.setStatus(RenterStatus.exist);
    //   this.isRenter = true;
    // });
  }


  openDialogRenter() {
    // let dialogRef: any;
    // if (this.status === 'רישום משכיר') {
    //   dialogRef = this.dialog.open(SignRenterComponent);
    // }
    // else {
    this.router.navigate(['/renter']);
    // }

    // dialogRef.afterClosed().subscribe(() => {
    //   this.status = 'סטטוס משכיר';
    //   this.isRenter = true;
    // });
  }

  openDialogCustomer(): void {
    this.dialog.open(SignCustomerComponent)
  }


  openDialogBot() {
    this.dialog.open(SpeakWithBotComponent,
      {
        width: '50vh',
        height: '80vh'
      }
    );
  }


}
