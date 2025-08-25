import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendarBody, MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { NgCalendarModule } from 'ionic2-calendar';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-calendar',
  imports: [
    FormsModule,
    CommonModule,
    MatCalendarBody,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    // FormControl,
    // JsonPipe,
    // MatCalendarCellCssClasses,
    // CalendarDateFormatter,
    // DateAdapter,
    // FullCalendarModule,
    NgCalendarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  dateRents1: Date[] = [
    new Date('2025-07-15'),
    new Date('2025-08-21')
  ];

  isPickerOpen = false;
  dateRangeForm: FormGroup;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const days: any[] = []
      const day = cellDate.getDate();
      const year = cellDate.getFullYear()
      const month = cellDate.getMonth()
      for (let i = this.dateRents1[0].getDate(); i >= this.dateRents1[0].getDate() && i <= this.dateRents1[1].getDate(); i++) {
        days.push(day === i &&
          (month === this.dateRents1[0].getMonth() || month === this.dateRents1[1].getMonth()) &&
          (year === this.dateRents1[0].getFullYear() || year === this.dateRents1[1].getFullYear()) ? 'save-date' : '')
      }
      return days;
    }
    return '';
  }

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    })
  }

  openDateRangePicker() {
    this.isPickerOpen = !this.isPickerOpen;
  }

  saveDateRange() {
    const dateRange = this.dateRangeForm.value;
    console.log('Selected Date Range:', dateRange);
    this.isPickerOpen = false;
  }



  // viewDate: Date = new Date();
  // events: any[] = [
  //   { start: new Date('2023-10-15'), title: 'Event 1' },
  //   { start: new Date('2023-10-20'), title: 'Event 2' }
  // ];

  // dayModifier = (date: Date) => {
  //   const highlightedDates = [new Date('2023-10-15'), new Date('2023-10-20')];
  //   return highlightedDates.some(highlightedDate =>
  //     date.getDate() === highlightedDate.getDate() &&
  //     date.getMonth() === highlightedDate.getMonth() &&
  //     date.getFullYear() === highlightedDate.getFullYear()
  //   ) ? { cssClass: 'highlighted' } : {};
  // }

}