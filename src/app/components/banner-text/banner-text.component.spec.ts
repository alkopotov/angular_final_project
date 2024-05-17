import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTextComponent } from './banner-text.component';

describe('BannerTextComponent', () => {
  let component: BannerTextComponent;
  let fixture: ComponentFixture<BannerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
