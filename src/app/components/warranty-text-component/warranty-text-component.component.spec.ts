import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyTextComponentComponent } from './warranty-text-component.component';

describe('WarrantyTextComponentComponent', () => {
  let component: WarrantyTextComponentComponent;
  let fixture: ComponentFixture<WarrantyTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantyTextComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
