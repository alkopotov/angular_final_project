import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageBannerComponent } from './category-page-banner.component';

describe('CategoryPageBannerComponent', () => {
  let component: CategoryPageBannerComponent;
  let fixture: ComponentFixture<CategoryPageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPageBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryPageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
