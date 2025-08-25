import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakWithBotComponent } from './speak-with-bot.component';

describe('SpeakWithBotComponent', () => {
  let component: SpeakWithBotComponent;
  let fixture: ComponentFixture<SpeakWithBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakWithBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakWithBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
