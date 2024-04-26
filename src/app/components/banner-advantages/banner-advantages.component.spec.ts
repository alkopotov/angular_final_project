import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdvantagesComponent } from './banner-advantages.component';

describe('BannerAdvantagesComponent', () => {
  let component: BannerAdvantagesComponent;
  let fixture: ComponentFixture<BannerAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAdvantagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
