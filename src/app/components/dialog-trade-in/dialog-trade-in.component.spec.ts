import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTradeInComponent } from './dialog-trade-in.component';

describe('DialogTradeInComponent', () => {
  let component: DialogTradeInComponent;
  let fixture: ComponentFixture<DialogTradeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTradeInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTradeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
