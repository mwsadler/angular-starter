import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockSectionComponent } from './manage-stock-section.component';

describe('ManageStockSectionComponent', () => {
  let component: ManageStockSectionComponent;
  let fixture: ComponentFixture<ManageStockSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStockSectionComponent]
    });
    fixture = TestBed.createComponent(ManageStockSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
