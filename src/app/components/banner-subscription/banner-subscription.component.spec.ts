import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSubscriptionComponent } from './banner-subscription.component';

describe('BannerSubscriptionComponent', () => {
  let component: BannerSubscriptionComponent;
  let fixture: ComponentFixture<BannerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
