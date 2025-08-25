import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollExampleComponent } from './scroll-example.component';

describe('ScrollExampleComponent', () => {
  let component: ScrollExampleComponent;
  let fixture: ComponentFixture<ScrollExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
