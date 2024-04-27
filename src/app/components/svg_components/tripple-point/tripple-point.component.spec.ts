import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripplePointComponent } from './tripple-point.component';

describe('TripplePointComponent', () => {
  let component: TripplePointComponent;
  let fixture: ComponentFixture<TripplePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripplePointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripplePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
