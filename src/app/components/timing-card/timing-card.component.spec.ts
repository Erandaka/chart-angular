import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingCardComponent } from './timing-card.component';

describe('TimingCardComponent', () => {
  let component: TimingCardComponent;
  let fixture: ComponentFixture<TimingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
