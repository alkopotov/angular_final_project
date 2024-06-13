import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedProductsTestComponent } from './viewed-products-test.component';

describe('ViewedProductsTestComponent', () => {
  let component: ViewedProductsTestComponent;
  let fixture: ComponentFixture<ViewedProductsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewedProductsTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewedProductsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
