import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInfoComponent } from './credit-info.component';

describe('CreditInfoComponent', () => {
  let component: CreditInfoComponent;
  let fixture: ComponentFixture<CreditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
