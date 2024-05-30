import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsTestComponent } from './all-products-test.component';

describe('AllProductsTestComponent', () => {
  let component: AllProductsTestComponent;
  let fixture: ComponentFixture<AllProductsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductsTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProductsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
