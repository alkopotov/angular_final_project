import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputCheckboxComponent } from './filter-input-checkbox.component';

describe('FilterInputCheckboxComponent', () => {
  let component: FilterInputCheckboxComponent;
  let fixture: ComponentFixture<FilterInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterInputCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
