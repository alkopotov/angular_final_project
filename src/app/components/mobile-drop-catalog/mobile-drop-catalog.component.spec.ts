import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDropCatalogComponent } from './mobile-drop-catalog.component';

describe('MobileDropCatalogComponent', () => {
  let component: MobileDropCatalogComponent;
  let fixture: ComponentFixture<MobileDropCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDropCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileDropCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
