import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-example',
  imports: [],
  templateUrl: './scroll-example.component.html',
  styleUrl: './scroll-example.component.scss'
})
export class ScrollExampleComponent {

  private savedScrollPosition: [number, number] = [0, 0];

  constructor(private viewportScroller: ViewportScroller) {}

  saveScrollPosition(): void {
    this.savedScrollPosition = this.viewportScroller.getScrollPosition();
    console.log('שמירת מיקום:', this.savedScrollPosition);
  }
  
}
