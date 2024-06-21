import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayPointComponent } from './subway-point.component';

describe('SubwayPointComponent', () => {
  let component: SubwayPointComponent;
  let fixture: ComponentFixture<SubwayPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubwayPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubwayPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
