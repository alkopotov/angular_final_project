import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterElemComponent } from './filter-elem.component';

describe('FilterElemComponent', () => {
  let component: FilterElemComponent;
  let fixture: ComponentFixture<FilterElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterElemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
