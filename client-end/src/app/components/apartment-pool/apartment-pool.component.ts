// import { CommonModule } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { PriceComponent } from '../price/price.component';
// import { MatDialog } from '@angular/material/dialog';
// import { Apartment } from '../../models/Apartment';
// import { NEVER, Observable, filter } from 'rxjs';
// import { ApartmentHttpService } from '../../service/apartment-http.service';
// import { Area } from '../../models/Area';
// import { AreaHttpService } from '../../service/area-http.service';
// import { EndComponent } from '../end/end.component';
// import { ImageHttpService } from '../../service/image-http.service';

// // import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-apartment-pool',
//   imports: [CommonModule, FormsModule, ReactiveFormsModule],
//   templateUrl: './apartment-pool.component.html',
//   styleUrl: './apartment-pool.component.scss'
// })
// export class ApartmentPoolComponent {

//   apartments_data: Apartment[] = [];
//   apartments$: Observable<Apartment> = NEVER;
//   private apartmentService = inject(ApartmentHttpService);
//   private imagesService = inject(ImageHttpService);


//   constructor() {
//      this.loadApartmentsFromServer();
//   }

//   loadApartmentsFromServer() {
//     this.apartmentService.getApartments$().subscribe({
//       next: (data: Apartment[]) => {
//         this.apartments = data;
//       },
//       error: (err: any) => {
//         console.error('שגיאה בטעינת דירות מהשרת:', err);
//       },
//     });
//   }

//   loadImagesFromServer() {
//     this.imagesService.getImage$().subscribe({
//       next: (data: string[]) => {
//         this.apartments = data;
//       },
//       error: (err: any) => {
//         console.error('שגיאה בטעינת תמונות מהשרת:', err);
//       },
//     });
//   }

//   // apartments_data = this.loadApertment()



//   router = inject(Router);
//   apartments2: Apartment[] = [];
//   i: number = 1
//   isModalBedOpen = false;
//   isModalPriceOpen = false;
//   isModalFilterOpen = false;
//   priceFrom: any = '150';
//   priceTo: any = '1000';
//   showDetails: boolean = false;
//   beds = [10, 15, 20, 25, 30, 35, 40, 45, 50];
//   apartments: Apartment[] = this.apartments_data;
//   selectedBed: number = 10;
//   items: any[] = ['חניה', 'מעלית', 'ממ"ד', 'מרפסת', 'מיזוג', 'נגישות']
//   readonly dialog = inject(MatDialog)
//   selectedItem: string = '';
//   new_filters: string[] = [];
//   selectFilter: boolean = false
//   showButton:boolean=false;
//   city: string = ''
//   img: string[] = ["/images/filter/park.svg", "/images/filter/elevator.svg", "/images/filter/protected_space.svg", "/images/filter/porch.svg", "/images/filter/air.svg", "/images/filter/accessibleness.svg"]
//   img_navbar :string[] = ["/images/navbar_apartment/bed.svg", "/images/navbar_apartment/cash.svg", "/images/navbar_apartment/filter.svg", "/images/navbar_apartment/reset.svg"]




//   onSearch() {
//     this.apartments2 = [];
//     for (let i = 0; i < this.apartments_data.length; i++) {
//       if ((this.apartments_data[i].park || !this.new_filters.includes('park')) &&
//         (this.apartments_data[i].elevator || !this.new_filters.includes('elevator')) &&
//         (this.apartments_data[i].porch || !this.new_filters.includes('porch')) &&
//         (this.apartments_data[i].protected_space || !this.new_filters.includes('protected_space')) &&
//         (this.apartments_data[i].air_conditioning || !this.new_filters.includes('air_conditioning')) &&
//         (this.apartments_data[i].accessibleness || !this.new_filters.includes('accessibleness')) &&
//         this.apartments_data[i].cost >= this.priceFrom && this.apartments_data[i].cost <= this.priceTo &&
//         this.apartments_data[i].numBeds >= this.selectedBed &&
//         this.apartments_data[i].address.includes(this.city))
//         this.apartments2.push(this.apartments_data[i])
//     }
//     this.new_filters = []
//   }

//   reset() {
//     this.apartments2 = this.apartments_data;
//     this.city = '';
//   }

//   // constructor(public dialog: MatDialog) { }

//   goToComponent(path: string) {
//     this.router.navigate([path]);
//   }

//   saveCity() {
//     this.apartments = []
//     for (let i = 0; i < this.apartments_data.length; i++) {
//       if (this.apartments_data[i].address.includes(this.city))
//         this.apartments.push(this.apartments_data[i])
//     }
//   }

//   openPriceDialog() {
//     this.dialog.open(PriceComponent)
//   }

//   togglePriceModal() {
//     this.isModalPriceOpen = !this.isModalPriceOpen;
//   }

//   toggleBedsModal() {
//     this.isModalBedOpen = !this.isModalBedOpen
//   }


//   toggleFilterModal() {
//     this.isModalFilterOpen = !this.isModalFilterOpen
//   }

//   closePriceModal() {
//     this.isModalPriceOpen = false;
//     this.onSearch()
//   }

//   selectBed(number: number): number {
//     this.selectedBed = number;
//     return this.selectedBed;
//   }

//   closeBedModal(): void {
//     this.isModalBedOpen = false;
//     this.onSearch()
//   }

//   closeFilterModal(): void {
//     this.isModalFilterOpen = false;
//     this.onSearch()
//   }

//   pathImg(p: string) {
//     return `/images/filter/${p}.jpg`
//   }

//   close(): void {
//     this.dialog.closeAll()
//   }


//   onNoClick(): void {
//     this.dialog.closeAll();
//   }


//   selectItem(item: string): any {
//     this.selectedItem = item;
//     this.selectFilter = true;
//     if (item === 'חניה')
//       this.new_filters.push('park')
//     if (item === 'מעלית')
//       this.new_filters.push('elevator')
//     if (item === 'מיזוג')
//       this.new_filters.push('air_conditioning')
//     if (item === 'גישה לנכים')
//       this.new_filters.push('accessibleness')
//     if (item === 'ממ"ד')
//       this.new_filters.push('protected_space')
//     if (item === 'מרפסת')
//       this.new_filters.push('porch')
//     return this.new_filters
//   }

//   openDialogEnd() {
//     this.dialog.open(EndComponent,
//       {
//         width: '100vh',
//         height: '80vh'
//       });
//   }

// }

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, NEVER, Observable } from 'rxjs';
import { Apartment } from '../../models/Apartment';
import { ApartmentHttpService } from '../../service/apartment-http.service';
import { PriceComponent } from '../price/price.component';
import { EndComponent } from '../end/end.component';
import { forkJoin, map, switchMap } from 'rxjs';


@Component({
  selector: 'app-apartment-pool',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apartment-pool.component.html',
  styleUrl: './apartment-pool.component.scss'
})
export class ApartmentPoolComponent {

  // apartments_data: Observable<Apartment[]> = NEVER as any;
  apartments: Apartment[] = [];                    // ← מוצג למסך
  apartments$: Observable<Apartment[]> = NEVER as any;
  apartments2: Apartment[] = [];
  apartments_data: Apartment[] = [];

  private apartmentService = inject(ApartmentHttpService);
  router = inject(Router);
  readonly dialog = inject(MatDialog);
  // UI state


  private apartments_data$ = new BehaviorSubject<Apartment[]>([]);
  // readonly apartments$ = this.apts$.asObservable();

  



  i = 1;
  isModalBedOpen = false;
  isModalPriceOpen = false;
  isModalFilterOpen = false;
  priceFrom: any = '150';
  priceTo: any = '1000';
  showDetails = false;
  beds = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  selectedBed = 10;
  items: string[] = ['חניה', 'מעלית', 'ממ"ד', 'מרפסת', 'מיזוג', 'נגישות'];
  selectedItem = '';
  new_filters: string[] = [];
  selectFilter = false;
  showButton = false;
  city = '';
  image: string[] = ["assets/images/filter/park.svg", "assets/images/filter/elevator.svg", "assets/images/filter/protected_space.svg", "assets/images/filter/porch.svg", "assets/images/filter/air.svg", "assets/images/filter/accessibleness.svg"];
  img_navbar: string[] = ["assets/images/navbar_apartment/bed.svg", "assets/images/navbar_apartment/cash.svg", "assets/images/navbar_apartment/filter.svg", "assets/images/navbar_apartment/reset.svg"];

  constructor() {
    this.loadApartments();
  }

  loadApartments() {
    this.apartmentService.getApartments$()
      .pipe(
        switchMap(apts => {
          this.apartments = apts;
          this.apartments_data = apts;
          return forkJoin(
            apts.map(a =>
              this.apartmentService.getImagesByApartment(a.apartmentId!)
                .pipe(map(imgs => ({ a, imgs: (imgs ?? []).slice(0, 2) })))
            )
          );
        })
      )
      .subscribe({
        next: results => {
          results.forEach(({ a, imgs }) => a.images = imgs);
        },
        error: err => console.error('שגיאה בטעינת דירות/תמונות:', err)
      });
      // this.apartments_data = this.apartments$
      this.apartments_data = [...this.apartments];
  }




  // אם יש endpoint לתמונות – למחוק/להתאים. כרגע פונקציה זו נראית לא נכונה (משנה apartments למערך תמונות).
  // loadImagesFromServer() { ... }

  // הופך נתיב יחסי ל־URL מלא תחת ה־API (http://localhost:5000)
  // imageSrc(path: string): string {
  //   if (!path) return '';
  //   const isAbs = /^https?:\/\//i.test(path);
  //   if (isAbs) return path;
  //   const base = environment?.apiBase ?? 'http://localhost:5000';
  //   return `${base}/${path.replace(/^\/+/, '')}`;
  // }

  onSearch() {
    this.apartments_data = NEVER as any;
    for (let i = 0; i < this.apartments.length; i++) {
      if ((this.apartments[i].park || !this.new_filters.includes('park')) &&
        (this.apartments[i].elevator || !this.new_filters.includes('elevator')) &&
        (this.apartments[i].porch || !this.new_filters.includes('porch')) &&
        (this.apartments[i].protected_space || !this.new_filters.includes('protected_space')) &&
        (this.apartments[i].accessibleness || !this.new_filters.includes('accessibleness')) &&
        this.apartments[i].priceToBed >= this.priceFrom && this.apartments[i].priceToBed <= this.priceTo &&
        this.apartments[i].numBeds >= this.selectedBed &&
        this.apartments[i].address.includes(this.city)) {
        // this.apartments_data.push(this.apartments[i]);
        this.apartments_data$.next([...this.apartments_data$.value, this.apartments[i]]);
      }
    }
    // לאחר סינון – להציב את התוצאה לתצוגה
    // this.apartments_data = [...this.apartments];
    this.new_filters = [];
  }

  reset() {
    this.apartments_data = [...this.apartments];
    this.city = '';
  }

  saveCity() {
    const res: Apartment[] = [];
    for (let i = 0; i < this.apartments_data.length; i++) {
      if (this.apartments_data[i].address.includes(this.city)) {
        res.push(this.apartments_data[i]);
      }
    }
    this.apartments = res;
  }



  // constructor(public dialog: MatDialog) { }

  goToComponent(path: string) {
    this.router.navigate([path]);
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
    if (item === 'מנגל')
      this.new_filters.push('mangal')
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

  imageSrc(name: string): string {
    if (!name) return '';
    return `assets/images/apartment/${name}`;
  }



}