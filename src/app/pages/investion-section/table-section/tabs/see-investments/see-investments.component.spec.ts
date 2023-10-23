import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInvestmentsComponent } from './see-investments.component';

describe('SeeInvestmentsComponent', () => {
  let component: SeeInvestmentsComponent;
  let fixture: ComponentFixture<SeeInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeInvestmentsComponent]
    });
    fixture = TestBed.createComponent(SeeInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
