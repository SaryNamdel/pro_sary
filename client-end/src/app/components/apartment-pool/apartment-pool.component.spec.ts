import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPoolComponent } from './apartment-pool.component';

describe('ApartmentPoolComponent', () => {
  let component: ApartmentPoolComponent;
  let fixture: ComponentFixture<ApartmentPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentPoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
