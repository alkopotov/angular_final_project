import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSearchBarComponent } from './catalog-search-bar.component';

describe('CatalogSearchBarComponent', () => {
  let component: CatalogSearchBarComponent;
  let fixture: ComponentFixture<CatalogSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
