import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitableApartmentsComponent } from './suitable-apartments.component';

describe('SuitableApartmentsComponent', () => {
  let component: SuitableApartmentsComponent;
  let fixture: ComponentFixture<SuitableApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuitableApartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitableApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
