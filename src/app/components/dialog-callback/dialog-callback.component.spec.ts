import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCallbackComponent } from './dialog-callback.component';

describe('DialogCallbackComponent', () => {
  let component: DialogCallbackComponent;
  let fixture: ComponentFixture<DialogCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCallbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
