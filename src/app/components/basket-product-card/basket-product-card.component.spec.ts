import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductCardComponent } from './basket-product-card.component';

describe('BasketProductCardComponent', () => {
  let component: BasketProductCardComponent;
  let fixture: ComponentFixture<BasketProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
