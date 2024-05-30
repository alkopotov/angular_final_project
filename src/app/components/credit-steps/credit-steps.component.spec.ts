import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditStepsComponent } from './credit-steps.component';

describe('CreditStepsComponent', () => {
  let component: CreditStepsComponent;
  let fixture: ComponentFixture<CreditStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
