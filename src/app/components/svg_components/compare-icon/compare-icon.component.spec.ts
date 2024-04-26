import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareIconComponent } from './compare-icon.component';

describe('CompareIconComponent', () => {
  let component: CompareIconComponent;
  let fixture: ComponentFixture<CompareIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
