import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-customer',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './sign-customer.component.html',
  styleUrl: './sign-customer.component.scss'
})
export class SignCustomerComponent {
  router = inject(Router);
  mouseoverLogin: boolean = false;
  newRent: boolean = false;
  formGroup: FormGroup = {} as FormGroup;
  readonly dialogRef = inject(MatDialogRef<SignCustomerComponent>);
  dynamicForm: FormGroup;
  showDetails: boolean = false;
  @Input() status: string = 'סטטוס שוכר';

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      fieldSelect: [''],
      name: [''],
      phone: ['']
    });
  }
 
  // constructor(private formBuilder: FormBuilder) { }

  onFieldChange() {
    this.showDetails = this.dynamicForm.get('fieldSelect')?.value === 'showDetails';
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      status: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  login(): void {
    const { username, pwd } = this.formGroup.value;
    localStorage.setItem('login', JSON.stringify({ username, pwd }))
    if (username == 'שוכר קיים' && pwd == 123) {
      this.dialogRef.close();
      this.status = 'סטטוס שוכר';
      this.router.navigate(['/customer'])
    }
    else
      if (username == 'שוכר חדש' && pwd == 456) {
        this.newRent = true;
        setTimeout(() => {
          this.dialogRef.close()
        }, 4000);
      }
  }
}
