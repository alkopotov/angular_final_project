import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElemComponent } from './header-elem.component';

describe('HeaderElemComponent', () => {
  let component: HeaderElemComponent;
  let fixture: ComponentFixture<HeaderElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderElemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
