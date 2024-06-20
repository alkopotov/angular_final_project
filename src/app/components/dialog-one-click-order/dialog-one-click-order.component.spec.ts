import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOneClickOrderComponent } from './dialog-one-click-order.component';

describe('DialogOneClickOrderComponent', () => {
  let component: DialogOneClickOrderComponent;
  let fixture: ComponentFixture<DialogOneClickOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOneClickOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogOneClickOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
