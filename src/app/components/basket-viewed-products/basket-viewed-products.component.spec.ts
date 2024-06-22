import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketViewedProductsComponent } from './basket-viewed-products.component';

describe('BasketViewedProductsComponent', () => {
  let component: BasketViewedProductsComponent;
  let fixture: ComponentFixture<BasketViewedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketViewedProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketViewedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
