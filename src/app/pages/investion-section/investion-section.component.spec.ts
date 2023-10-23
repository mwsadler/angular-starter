import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestionSectionComponent } from './investion-section.component';

describe('InvestionSectionComponent', () => {
  let component: InvestionSectionComponent;
  let fixture: ComponentFixture<InvestionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestionSectionComponent]
    });
    fixture = TestBed.createComponent(InvestionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
