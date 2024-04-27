import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterElemComponent } from './footer-elem.component';

describe('FooterElemComponent', () => {
  let component: FooterElemComponent;
  let fixture: ComponentFixture<FooterElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterElemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
