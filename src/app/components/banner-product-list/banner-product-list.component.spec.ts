import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductListComponent } from './banner-product-list.component';

describe('BannerProductListComponent', () => {
  let component: BannerProductListComponent;
  let fixture: ComponentFixture<BannerProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
