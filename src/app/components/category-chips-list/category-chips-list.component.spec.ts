import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChipsListComponent } from './category-chips-list.component';

describe('CategoryChipsListComponent', () => {
  let component: CategoryChipsListComponent;
  let fixture: ComponentFixture<CategoryChipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryChipsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
