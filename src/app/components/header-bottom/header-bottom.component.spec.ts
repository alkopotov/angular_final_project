import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBottomComponent } from './header-bottom.component';

describe('HeaderBottomComponent', () => {
  let component: HeaderBottomComponent;
  let fixture: ComponentFixture<HeaderBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
