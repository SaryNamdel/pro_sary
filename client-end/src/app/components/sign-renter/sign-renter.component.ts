import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RenterService } from '../services/renter.service';
import { RenterStatus } from '../../statusEnum';


@Component({
  selector: 'app-sign-renter',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './sign-renter.component.html',
  styleUrl: './sign-renter.component.scss'
})
export class SignRenterComponent implements OnInit {
  renterService = inject(RenterService);
  addDetails: boolean = false;
  detailsRenter = true;
  router = inject(Router);
  mouseoverLogin: boolean = false;
  newRent: boolean = false;
  formGroup1: FormGroup = {} as FormGroup;
  formGroup2: FormGroup = {} as FormGroup;
  readonly dialogRef = inject(MatDialogRef<SignRenterComponent>);
  dynamicForm: FormGroup;
  showDetails: boolean = false;
  status: RenterStatus = RenterStatus.register;

  // @Input() status: string = 'סטטוס משכיר';
  isModalOpen: boolean = false
  readonly dialog = inject(MatDialog)
  messege: string = '';





  onFieldChange(): void {
    // const selectedStatus = this.dynamicForm.get('status')?.value;
    // console.log('Selected Status:', selectedStatus);
    this.showDetails = this.dynamicForm.get('fieldSelect')?.value === 'showDetails';
  }



  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private formBuilder2: FormBuilder) {
    this.dynamicForm = this.fb.group({
      status: [''],
      fieldSelect: ['']
    });
  }

  // constructor(private formBuilder: FormBuilder) { }

  // onFieldChange() {
  //   this.showDetails = this.dynamicForm.get('fieldSelect')?.value === 'showDetails';
  // }

  ngOnInit(): void {
    this.formGroup1 = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      status: [''],
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: ['']
    }),
      this.formGroup2 = this.formBuilder2.group({
        city: ['', [Validators.required]],
        description: ['', [Validators.required]],
        accessibleness: [''],
        elevator: ['', [Validators.required]],
        porch: ['', [Validators.required]],
        air_conditioning: ['', [Validators.required]],
        parking: ['', [Validators.required]],
        beds: ['', [Validators.required]],
        rooms: ['', [Validators.required]]
      }),
      console.log("status in sign renter " + this.status);

  }

  login(): void {
    const { username, password } = this.formGroup1.value;
    const selectedStatus = this.dynamicForm.get('fieldSelect')?.value;
    // localStorage.setItem('login', JSON.stringify({ username, password }))
    if (selectedStatus === 'existing') {
      if (username === 'משכיר קיים' && password === "123") {
        // this.status = 'סטטוס משכיר';
        this.renterService.setStatus(RenterStatus.exist)
        this.status = this.renterService.getStatus()
        this.dialogRef.close();
        this.router.navigate(['/renter'])
      }
      else {
        if (username !== 'משכיר קיים' && password === '123')
          this.messege = 'השם משתמש שהוקש שגוי,נא להקיש שנית'
        if (username === 'משכיר קיים' && password !== '123')
          this.messege = 'הסיסמא שהוקשה שגויה,נא להקיש שנית'
        if (username !== 'משכיר קיים' && password !== '123')
          this.messege = 'השם משתמש והסיסמא שהוקשו שגויים,נא להקיש שנית'
        this.dialogRef.afterClosed().subscribe(() => {
          this.renterService.setStatus(RenterStatus.register);
          this.status = this.renterService.getStatus()
        });
      }
    }
    else {
      //need to save the details in the data
      this.renterService.setStatus(RenterStatus.exist)
      this.newRent = true;
      setTimeout(() => {
        this.dialogRef.close()
      }, 4000);
      this.router.navigate(['/renter'])
    }
  }

  openDialogAddDetails() {
    this.router.navigate(['/new-renter'])
    this.detailsRenter = false;
    this.addDetails = true;
  }

}
