import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPromoComponent } from './banner-promo.component';

describe('BannerPromoComponent', () => {
  let component: BannerPromoComponent;
  let fixture: ComponentFixture<BannerPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
