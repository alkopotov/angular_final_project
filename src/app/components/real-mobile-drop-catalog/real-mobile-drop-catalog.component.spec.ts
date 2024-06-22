import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealMobileDropCatalogComponent } from './real-mobile-drop-catalog.component';

describe('RealMobileDropCatalogComponent', () => {
  let component: RealMobileDropCatalogComponent;
  let fixture: ComponentFixture<RealMobileDropCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealMobileDropCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealMobileDropCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
