import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBasketComponent } from './dialog-basket.component';

describe('DialogBasketComponent', () => {
  let component: DialogBasketComponent;
  let fixture: ComponentFixture<DialogBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
