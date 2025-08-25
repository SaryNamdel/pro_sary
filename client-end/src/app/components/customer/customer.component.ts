import { Component, Input, inject } from '@angular/core';
import { Apartment } from '../../models/Apartment';
import { CalendarComponent } from 'ionic2-calendar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-customer',
  imports: [FormsModule,
    CommonModule,
    // MatCalendarBody,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  router = inject(Router);
  readonly dialog = inject(MatDialog)
  apartmentsInRent: Apartment[] = [];
  apartments: Apartment[] = [];
  @Input() status: string = 'סטטוס משכיר';

  constructor() {
    // this.apartments = [
    //   new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'אחוה 58 ערד', 40, 200, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home29.jpg'], 10, 1, true,false),
    // new Apartment('וילה במיקום שקט ורגוע', 'הרצוג 12 בני ברק', 25, 200, 1, 2, 3, true, true, 6, false, true, 5, 6
    //   , ['/images/apartment/home30.jpg'], 10, 1, true,false),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'אחוה 58 ערד', 35, 200, 1, 2, 3, true, false, 6, false, false, 5, 6
    //   , ['/images/apartment/home19.jpg'], 10, 1, false,true)
    // ];
   
  }


  pathImg(p: string) {
    return `/images/apartment/${p}.jpg`
  }

  openCalendar() {
    this.dialog.open(CalendarComponent)
  }

  goComponent(path: string) {
    this.router.navigate([path]);
  }

  

}


