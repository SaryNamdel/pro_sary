import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RenterService } from '../services/renter.service';
import { RenterStatus } from '../../statusEnum';
import { RentersHttpService } from '../../service/renters-http.service';
import { usernameAvailableValidator } from '../../validators/username-available.validator';


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

  private renterHttpService = inject(RentersHttpService);




  onFieldChange(): void {
    // const selectedStatus = this.dynamicForm.get('status')?.value;
    // console.log('Selected Status:', selectedStatus);
    this.showDetails = this.dynamicForm.get('fieldSelect')?.value === 'showDetails';
  }



  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private formBuilder2: FormBuilder, private api: RentersHttpService) {
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
      username: ['', {
        validators: [Validators.required, Validators.minLength(3)],
        asyncValidators: [usernameAvailableValidator(this.api)],
        // updateOn: 'blur' // מפעיל את הבדיקה כשמאבדים פוקוס (מומלץ)
      }],
      pwd: ['', [Validators.required, Validators.minLength(3)]],
      status: [''],
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: ['']
    }),
      // this.formGroup2 = this.formBuilder2.group({
      //   city: ['', [Validators.required]],
      //   description: ['', [Validators.required]],
      //   accessibleness: [''],
      //   elevator: ['', [Validators.required]],
      //   porch: ['', [Validators.required]],
      //   air_conditioning: ['', [Validators.required]],
      //   parking: ['', [Validators.required]],
      //   beds: ['', [Validators.required]],
      //   rooms: ['', [Validators.required]]
      // }),
      console.log("status in sign renter " + this.status);

  }
 


  // login(): void {
  //   const { username, pwd } = this.formGroup1.value;
  //   const selectedStatus = this.dynamicForm.get('fieldSelect')?.value;
  //   // localStorage.setItem('login', JSON.stringify({ username, pwd }))
  //   if (selectedStatus === 'existing') {
  //     if (username === 'משכיר קיים' && pwd === "123") {
  //       // this.status = 'סטטוס משכיר';
  //       this.renterService.setStatus(RenterStatus.exist)
  //       this.status = this.renterService.getStatus()
  //       this.dialogRef.close();
  //       this.router.navigate(['/renter'])
  //     }
  //     else {
  //       if (username !== 'משכיר קיים' && pwd === '123')
  //         this.messege = 'השם משתמש שהוקש שגוי,נא להקיש שנית'
  //       if (username === 'משכיר קיים' && pwd !== '123')
  //         this.messege = 'הסיסמא שהוקשה שגויה,נא להקיש שנית'
  //       if (username !== 'משכיר קיים' && pwd !== '123')
  //         this.messege = 'השם משתמש והסיסמא שהוקשו שגויים,נא להקיש שנית'
  //       this.dialogRef.afterClosed().subscribe(() => {
  //         this.renterService.setStatus(RenterStatus.register);
  //         this.status = this.renterService.getStatus()
  //       });
  //     }
  //   }
  //   else {
  //     //need to save the details in the data
  //     this.renterService.setStatus(RenterStatus.exist)
  //     this.newRent = true;
  //     setTimeout(() => {
  //       this.dialogRef.close()
  //     }, 4000);
  //     this.router.navigate(['/renter'])
  //   }
  // }


  // component




  login(): void {
    const { username, pwd, firstName, phone, lastName, email } = this.formGroup1.value;
    const selectedStatus = this.dynamicForm.get('fieldSelect')?.value as 'existing' | 'new';

    // ניקוי הודעות קודמות
    this.messege = '';

    if (!username || !pwd) {
      this.messege = 'יש למלא שם משתמש וסיסמה';
      return;
    }

    if (selectedStatus === 'existing') {
      // התחברות מול DB
      this.renterHttpService.login({ username, pwd }).subscribe({
        next: renter => {
          // הצלחה
          this.renterService.setStatus(RenterStatus.exist);
          this.status = this.renterService.getStatus();
          // אופציונלי: localStorage.setItem('renter', JSON.stringify(renter));
          this.dialogRef.close();
          this.router.navigate(['/renter']);
        },
        error: err => {
          // 401/404/שגיאה לוגית מהשרת
          const msg = err?.error?.message || 'שם משתמש או סיסמה שגויים';
          this.messege = msg;
          // אופציונלי: מעבר אוטומטי למסך הרשמה
          this.renterService.setStatus(RenterStatus.register);
          this.status = this.renterService.getStatus();
        }
      });
    } else {
      // הרשמה – יצירת משכיר חדש ב-DB
      if (this.formGroup1.invalid) return;
      const payload = { username, pwd, firstName, phone, status, email, lastName } as any; // הוסיפי שדות נוספים מטופס הרשמה אם יש
      this.renterHttpService.register(payload).subscribe({
        next: renter => {
          this.renterService.setStatus(RenterStatus.exist);
          this.newRent = true;
          this.renterHttpService.saveAuth(renter); 
          this.dialogRef.close();
          this.router.navigate(['/renter']);
        },
        error: err => {
          const msg = err?.error?.message || 'שגיאה בהרשמה';
          this.messege = msg;
        }
      });
    }
  }


  openDialogAddDetails() {
    this.router.navigate(['/new-renter'])
    this.detailsRenter = false;
    this.addDetails = true;
  }

}



