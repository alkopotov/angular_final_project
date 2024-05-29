import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBannerTopComponent } from './credit-banner-top.component';

describe('CreditBannerTopComponent', () => {
  let component: CreditBannerTopComponent;
  let fixture: ComponentFixture<CreditBannerTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditBannerTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditBannerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
