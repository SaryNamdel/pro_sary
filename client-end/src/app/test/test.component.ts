

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '',
})
export class TestComponent {
  constructor(private http: HttpClient) {
    console.log('Http injected');
  }
}






