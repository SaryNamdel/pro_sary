import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCalendarBody, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CalendarComponent } from '../calendar/calendar.component';
import { Router } from '@angular/router';
import { Apartment } from '../../models/Apartment';

// import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-renter',
  template: `
  <full-calendar [options]="calendarOptions"></full-calendar>
`,
  styles: [`
  full-calendar {
    max-width: 900px;
    margin: 0 auto;
  }
`],
  imports: [
    FormsModule,
    CommonModule,
    // MatCalendarBody,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule],
  templateUrl: './renter.component.html',
  styleUrl: './renter.component.scss'
})


export class RenterComponent {
  router = inject(Router);
  readonly dialog = inject(MatDialog)
  apartmentsInRent: Apartment[] = [];
  @Input() status: string = 'סטטוס משכיר';
  isAdd: boolean = false
  apartments: Apartment[] = [];

  features = [
    { name: 'חצר', selected: false },
    { name: 'בריכה', selected: false },
    { name: 'טרמפולינה', selected: false },
    { name: 'מרפסת', selected: false },
    { name: 'חניה', selected: false },
    { name: 'מעלית', selected: false },
    { name: 'גישה לנכים', selected: false },
    { name: 'פינת ישיבה', selected: false },
    { name: 'ערסל', selected: false },
    { name: 'ספסל נדנדה', selected: false }
  ];

  input = [
    { name: 'מספר קומה', selected: false },
    { name: 'מספר חדרים', selected: false },
    { name: 'מספר מיטות', selected: false },
  ]

  constructor() {
    // this.apartments = [
    //   new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'אחוה 58 ערד', 40, 200, 1, 2, 3, true,
    //     true, 6, true, true, 5, 6, ['/images/apartment/home29.jpg'], 10, 1, true, false),
    //   new Apartment('וילה במיקום שקט ורגוע', 'הרצוג 12 בני ברק', 25, 200, 1, 2, 3, true, true, 6, false, true, 5, 6
    //     , ['/images/apartment/home30.jpg'], 10, 1, true, false),
    //   new Apartment('דירה במיקום מרכזי ונגיש', 'אחוה 58 ערד', 35, 200, 1, 2, 3, true, false, 6, false, false, 5, 6
    //     , ['/images/apartment/home20.jpg'], 10, 1, false, true)
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

  addApartment() {
    this.isAdd = true;
  }

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
  //   },
  //   events: [
  //     { title: 'Event 1', date: '2023-10-01' },
  //     { title: 'Event 2', date: '2023-10-02' }
  //   ],
  //   themeSystem: 'bootstrap'
  // };

}

//git pull
//solve conflict
//git push
