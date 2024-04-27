import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMemuComponent } from './hamburger-memu.component';

describe('HamburgerMemuComponent', () => {
  let component: HamburgerMemuComponent;
  let fixture: ComponentFixture<HamburgerMemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerMemuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburgerMemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
