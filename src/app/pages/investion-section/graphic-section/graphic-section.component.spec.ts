import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSectionComponent } from './graphic-section.component';

describe('GraphicSectionComponent', () => {
  let component: GraphicSectionComponent;
  let fixture: ComponentFixture<GraphicSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicSectionComponent]
    });
    fixture = TestBed.createComponent(GraphicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
