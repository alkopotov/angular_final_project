import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogIconComponent } from './catalog-icon.component';

describe('CatalogIconComponent', () => {
  let component: CatalogIconComponent;
  let fixture: ComponentFixture<CatalogIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
