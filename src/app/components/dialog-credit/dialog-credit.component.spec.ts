import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreditComponent } from './dialog-credit.component';

describe('DialogCreditComponent', () => {
  let component: DialogCreditComponent;
  let fixture: ComponentFixture<DialogCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
