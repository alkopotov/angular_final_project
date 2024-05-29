import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPageComponent } from './credit-page.component';

describe('CreditPageComponent', () => {
  let component: CreditPageComponent;
  let fixture: ComponentFixture<CreditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
