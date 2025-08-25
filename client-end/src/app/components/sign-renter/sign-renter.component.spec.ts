import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRenterComponent } from './sign-renter.component';

describe('SignRenterComponent', () => {
  let component: SignRenterComponent;
  let fixture: ComponentFixture<SignRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignRenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
