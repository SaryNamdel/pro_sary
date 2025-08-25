import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpeakWithBotComponent } from './components/speak-with-bot/speak-with-bot.component';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApartmentPoolComponent } from './components/apartment-pool/apartment-pool.component';
import { MatDialog } from '@angular/material/dialog';
import { SignCustomerComponent } from './components/sign-customer/sign-customer.component';
import { SignRenterComponent } from './components/sign-renter/sign-renter.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RenterService } from './components/services/renter.service';
import { RenterStatus } from './statusEnum';
import { TryHttpService } from './service/try-http.service';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //  animations: [
  //   trigger('moveAnimation', [
  //     state('move', style({ transform: 'translateX(100%)' })),
  //     state('stop', style({ transform: 'translateX(0)' })),
  //     transition('move <=> stop', animate('2s linear'))
  //   ])
  // ],
  imports: [
    CommonModule,
    RouterModule,
    ApartmentPoolComponent,
    HomeComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    HttpClientModule]
})


export class AppComponent implements OnInit {

  constructor(private tryHttpService: TryHttpService) {}

  renterService = inject(RenterService);
  sharedVariable: string = '';
  isMoving = true;
  title = 'dreamsDwelling';
  readonly dialog = inject(MatDialog)
  router = inject(Router);
  status: RenterStatus = this.renterService.getStatus()
  isRenter: boolean = false;



  ngOnInit(): void {
    console.log("status in app " + this.status);
    this.renterService.setStatus(RenterStatus.register);
    // this.status = this.renterService.getStatus()
    // this.router.navigate(['/home']);
  }



  openDialogSignRenter() {
    this.dialog.open(SignRenterComponent);
    // dialogRef.afterClosed().subscribe(() => {
    //   this.renterService.setStatus(RenterStatus.exist);
    //   this.isRenter = true;
    // });
  }


  openDialogRenter() {
    let dialogRef: any;
    if (this.renterService.getStatus() === 'רישום משכיר') {
      dialogRef = this.dialog.open(SignRenterComponent);
    }
    else {
    this.router.navigate(['/renter']);
    }

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








