import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from '../../models/Apartment';
import { MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';



const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();



@Component({
  selector: 'app-end',
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EndComponent {
  router = inject(Router);

  // apartment =
  //   new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'אחוה ערד', 40, 650, 1, 2, 3, true,
  //     true, 6, true, true, 5, 6, ['/images/apartment/home20.jpg', '/images/apartment/home21.jpg', '/images/apartment/home22.jpg', '/images/apartment/home24.jpg'],
  //     10, 1, true, true)

  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
