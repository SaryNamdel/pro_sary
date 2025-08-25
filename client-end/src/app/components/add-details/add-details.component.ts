import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.scss'
})
export class AddDetailsComponent {
  mouseoverLogin: boolean = false;
  router = inject(Router);

  formGroup: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      clean: this.formBuilder.control(''),
      elevator: this.formBuilder.control(''),
      trampoline: this.formBuilder.control(''),
      bigLivingRoom: this.formBuilder.control(''),
      numRooms: this.formBuilder.control(''),
      pool: this.formBuilder.control(''),
      hammock: this.formBuilder.control(''),
      woodenBench: this.formBuilder.control(''),
      seatingSystem: this.formBuilder.control(''),
    })
    this.formGroup = this.formBuilder.group({
      clean: ['', [Validators.pattern("^[1-9]$")]],
      elevator: ['',  (form: any) => this.validTrueOrFalse(form)],
      trampoline: ['', (form: any) => this.validTrueOrFalse(form)],
      // bigLivingRoom: ['',[Validators.pattern("(?i)(true|false)$")]],
      bigLivingRoom: [''],
      numRooms: ['', [Validators.pattern("^[1-9]*$")]],
      pool: ['', (form: any) => this.validTrueOrFalse(form)],
      hammock: ['', (form: any) => this.validTrueOrFalse(form)],
      woodenBench: ['', (form: any) => this.validTrueOrFalse(form)],
      seatingSystem: ['', (form: any) => this.validTrueOrFalse(form)],
    })
  }

  login(path: string) {
    this.router.navigate([path]);

    const obj = this.formGroup.value;
    const { numBeds, numDays } = this.formGroup.value;
    //שליחה לחיפוש במאגר הדירות
  }

  validTrueOrFalse(control: FormControl) {
    console.log(control);
    console.log(control.value);
    if (control.value === "true" || control.value === "false" || control.value === "True" || control.value === "False")
      return { valid: true }
    return { valid: false };
  }
}

