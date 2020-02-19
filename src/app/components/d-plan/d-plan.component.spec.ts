import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPlanComponent } from './d-plan.component';

describe('DPlanComponent', () => {
  let component: DPlanComponent;
  let fixture: ComponentFixture<DPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
