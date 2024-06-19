import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformAvailableComponent } from './dialog-inform-available.component';

describe('DialogInformAvailableComponent', () => {
  let component: DialogInformAvailableComponent;
  let fixture: ComponentFixture<DialogInformAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInformAvailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogInformAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
