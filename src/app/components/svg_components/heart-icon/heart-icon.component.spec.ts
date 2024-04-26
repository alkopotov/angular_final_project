import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartIconComponent } from './heart-icon.component';

describe('HeartIconComponent', () => {
  let component: HeartIconComponent;
  let fixture: ComponentFixture<HeartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeartIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
