import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallInvestmentsComponent } from './overall-investments.component';

describe('OverallInvestmentsComponent', () => {
  let component: OverallInvestmentsComponent;
  let fixture: ComponentFixture<OverallInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallInvestmentsComponent]
    });
    fixture = TestBed.createComponent(OverallInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
