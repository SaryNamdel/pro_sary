import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceComponent } from '../price/price.component';
import { MatDialog } from '@angular/material/dialog';
import { Apartment } from '../../models/Apartment';
import { NEVER, Observable, filter } from 'rxjs';
import { ApartmentHttpService } from '../../service/apartment-http.service';
import { Area } from '../../models/Area';
import { AreaHttpService } from '../../service/area-http.service';
import { EndComponent } from '../end/end.component';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apartment-pool',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apartment-pool.component.html',
  styleUrl: './apartment-pool.component.scss'
})
export class ApartmentPoolComponent {

  apartments_data: Apartment[] = [];
  apartments$: Observable<Apartment> = NEVER;
  // areas$:  Observable<Area> = NEVER;
  // areas$: Observable<Area[]> = this.areaService.getAreas();
  private areaService = inject(AreaHttpService);
  areas$:Observable<Area[]> = this.areaService.getArea$();
  private apartmentService = inject(ApartmentHttpService);


  constructor() {
    // this.loadAreaFromServer()
    // this.loadApartmentsFromServer();
  }

  // loadAreaFromServer(){
  //   this.areaService.getArea$().subscribe({
  //     next: (data: Area[]) => {
  //       this.areas$ = data;
  //     },
  //     error: (err: any) => {
  //       console.error('שגיאה בטעינת דירות מהשרת:', err);
  //     },
  //   });
  // }
  // loadApartmentsFromServer() {
  //   this.apartmentService.getApartments$().subscribe({
  //     next: (data: Apartment[]) => {
  //       this.apartments = data;
  //     },
  //     error: (err: any) => {
  //       console.error('שגיאה בטעינת דירות מהשרת:', err);
  //     },
  //   });
  // }

 
  
  // apartments_data = this.loadApertment()

  // apartments_data = [
    // new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'אחוה ערד', 40, 650, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home30.jpg'], 10, 1, true, true),
    // new Apartment('וילה במיקום שקט ורגוע', 'הרצוג בני ברק', 25, 360, 1, 2, 3, true, true, 6, false, true, 5, 6
    //   , ['/images/apartment/home2.jpg'], 10, 1, true, false),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'עפרוני ערד', 35, 150, 1, 2, 3, true, false, 6, false, true, 5, 6
    //   , ['/images/apartment/home3.jpg'], 10, 1, true, true),
    // new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'ויצמן רמת גן', 40, 200, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home4.jpg'], 10, 1, true, false),
    // new Apartment('וילה במיקום שקט ורגוע', 'רבי עקיבא בני ברק', 25, 200, 1, 2, 3, true, true, 6, false, true, 5, 6
    //   , ['/images/apartment/home5.jpg'], 10, 1, true, false),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'מור ערד', 35, 245, 1, 2, 3, true, true, 6, false, false, 5, 6
    //   , ['/images/apartment/home6.jpg'], 10, 1, false, true),
    // new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'בן ציון גול הבוכרים ירושלים', 40, 200, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home7.jpg'], 10, 1, true, false),
    // new Apartment('וילה במיקום שקט ורגוע', 'השומרי  פתח תקוה', 25, 200, 1, 2, 3, false, true, 6, true, true, 5, 6
    //   , ['/images/apartment/home8.jpg'], 10, 1, true, true),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'אבינדב ירושלים', 35, 200, 1, 2, 3, true, false, 6, false, false, 5, 6
    //   , ['/images/apartment/home9.jpg'], 10, 1, true, true),
    // new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'כלנית 58 אשדוד', 40, 350, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home10.jpg'], 10, 1, true, false),
    // new Apartment('וילה במיקום שקט ורגוע', 'חסדא 12 אשדוד ', 25, 200, 1, 2, 3, true, true, 6, false, true, 5, 6
    //   , ['/images/apartment/home11.jpg'], 10, 1, true, false),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'צקלג 58 קרית גת', 35, 200, 1, 2, 3, true, false, 6, false, false, 5, 6
    //   , ['/images/apartment/home12.jpg'], 10, 1, false, true),
    // new Apartment('וילה רחבת ידיים בעלת 4 כיווני אויר ומשופצת', 'בן איש חי חפציבה בית שמש', 40, 480, 1, 2, 3, true,
    //   true, 6, true, true, 5, 6, ['/images/apartment/home13.jpg'], 10, 1, false, true),
    // new Apartment('וילה במיקום שקט ורגוע', 'טרפון בני ברק', 25, 500, 1, 2, 3, true, true, 6, false, true, 5, 6
    //   , ['/images/apartment/home30.jpg'], 10, 1, true, false),
    // new Apartment('דירה במיקום מרכזי ונגיש', 'מואב ערד', 35, 180, 1, 2, 3, true, true, 6, false, false, 5, 6
    //   , ['/images/apartment/home29.jpg'], 10, 1, false, true)
  // ];



  router = inject(Router);
  apartments2: Apartment[] = [];
  i: number = 1
  isModalBedOpen = false;
  isModalPriceOpen = false;
  isModalFilterOpen = false;
  priceFrom: any = '150';
  priceTo: any = '1000';
  showDetails: boolean = false;
  beds = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  apartments: Apartment[] = this.apartments_data;
  selectedBed: number = 10;
  items: any[] = ['חניה', 'מעלית', 'ממ"ד', 'מרפסת', 'מיזוג', 'נגישות']
  readonly dialog = inject(MatDialog)
  selectedItem: string = '';
  new_filters: string[] = [];
  selectFilter: boolean = false
  showButton:boolean=false;
  city: string = ''
  img: string[] = ["/images/filter/park.svg", "/images/filter/elevator.svg", "/images/filter/protected_space.svg", "/images/filter/porch.svg", "/images/filter/air.svg", "/images/filter/accessibleness.svg"]
  img_navbar :string[] = ["/images/navbar_apartment/bed.svg", "/images/navbar_apartment/cash.svg", "/images/navbar_apartment/filter.svg", "/images/navbar_apartment/reset.svg"]

  
 

  onSearch() {
    this.apartments2 = [];
    for (let i = 0; i < this.apartments_data.length; i++) {
      if ((this.apartments_data[i].park || !this.new_filters.includes('park')) &&
        (this.apartments_data[i].elevator || !this.new_filters.includes('elevator')) &&
        (this.apartments_data[i].porch || !this.new_filters.includes('porch')) &&
        (this.apartments_data[i].protected_space || !this.new_filters.includes('protected_space')) &&
        (this.apartments_data[i].air_conditioning || !this.new_filters.includes('air_conditioning')) &&
        (this.apartments_data[i].accessibleness || !this.new_filters.includes('accessibleness')) &&
        this.apartments_data[i].cost >= this.priceFrom && this.apartments_data[i].cost <= this.priceTo &&
        this.apartments_data[i].numBeds >= this.selectedBed &&
        this.apartments_data[i].address.includes(this.city))
        this.apartments2.push(this.apartments_data[i])
    }
    this.new_filters = []
  }

  reset() {
    this.apartments2 = this.apartments_data;
    this.city = '';
  }

  // constructor(public dialog: MatDialog) { }

  goToComponent(path: string) {
    this.router.navigate([path]);
  }

  saveCity() {
    this.apartments = []
    for (let i = 0; i < this.apartments_data.length; i++) {
      if (this.apartments_data[i].address.includes(this.city))
        this.apartments.push(this.apartments_data[i])
    }
  }

  openPriceDialog() {
    this.dialog.open(PriceComponent)
  }

  togglePriceModal() {
    this.isModalPriceOpen = !this.isModalPriceOpen;
  }

  toggleBedsModal() {
    this.isModalBedOpen = !this.isModalBedOpen
  }


  toggleFilterModal() {
    this.isModalFilterOpen = !this.isModalFilterOpen
  }

  closePriceModal() {
    this.isModalPriceOpen = false;
    this.onSearch()
  }

  selectBed(number: number): number {
    this.selectedBed = number;
    return this.selectedBed;
  }

  closeBedModal(): void {
    this.isModalBedOpen = false;
    this.onSearch()
  }

  closeFilterModal(): void {
    this.isModalFilterOpen = false;
    this.onSearch()
  }

  pathImg(p: string) {
    return `/images/filter/${p}.jpg`
  }

  close(): void {
    this.dialog.closeAll()
  }


  onNoClick(): void {
    this.dialog.closeAll();
  }


  selectItem(item: string): any {
    this.selectedItem = item;
    this.selectFilter = true;
    if (item === 'חניה')
      this.new_filters.push('park')
    if (item === 'מעלית')
      this.new_filters.push('elevator')
    if (item === 'מיזוג')
      this.new_filters.push('air_conditioning')
    if (item === 'גישה לנכים')
      this.new_filters.push('accessibleness')
    if (item === 'ממ"ד')
      this.new_filters.push('protected_space')
    if (item === 'מרפסת')
      this.new_filters.push('porch')
    return this.new_filters
  }

  openDialogEnd() {
    this.dialog.open(EndComponent,
      {
        width: '100vh',
        height: '80vh'
      });
  }

}
