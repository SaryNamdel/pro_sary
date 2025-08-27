import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  tzimer = 'צימרים'
  contentTzimer  ='צימרים וקוטגים מפוארים ומרווחים, במיקומים שקטים ופסטורליים נגישים לכל אחד, בגדלים שונים, בסטייל שלא תמצאו בשום מקום'
  pool = 'בריכות'
  contentPool = 'מגוון בריכות גדולות ומרווחות, בריכות לילדים עם אטרקציות,מגלישות,תותחי מים ועוד. בריכות חצי אולימפיות, בריכות גקוזי בגדלים שונים ועוד הרבה...'
  vilag = ''
  contentVilag = ''
  attraction = ''
  contentAttraction = ''
  router = inject(Router); 

  goToComponent(path:string) {
    this.router.navigate([path]);
 }

 pathImg(p: string) {
  // return '/images/' + p.fullAddress + '.jpg'
  return `/images/home/${p}.jpg`
}
}




