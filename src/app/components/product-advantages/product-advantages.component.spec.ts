import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvantagesComponent } from './product-advantages.component';

describe('ProductAdvantagesComponent', () => {
  let component: ProductAdvantagesComponent;
  let fixture: ComponentFixture<ProductAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAdvantagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
