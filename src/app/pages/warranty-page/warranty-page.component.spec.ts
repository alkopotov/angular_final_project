import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyPageComponent } from './warranty-page.component';

describe('WarrantyPageComponent', () => {
  let component: WarrantyPageComponent;
  let fixture: ComponentFixture<WarrantyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
