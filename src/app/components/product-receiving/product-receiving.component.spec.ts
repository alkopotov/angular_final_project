import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReceivingComponent } from './product-receiving.component';

describe('ProductReceivingComponent', () => {
  let component: ProductReceivingComponent;
  let fixture: ComponentFixture<ProductReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReceivingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
