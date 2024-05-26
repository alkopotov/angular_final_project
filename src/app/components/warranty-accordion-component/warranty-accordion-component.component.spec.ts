import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyAccordionComponentComponent } from './warranty-accordion-component.component';

describe('WarrantyAccordionComponentComponent', () => {
  let component: WarrantyAccordionComponentComponent;
  let fixture: ComponentFixture<WarrantyAccordionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantyAccordionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyAccordionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
