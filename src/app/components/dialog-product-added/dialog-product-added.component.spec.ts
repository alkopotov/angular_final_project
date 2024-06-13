import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductAddedComponent } from './dialog-product-added.component';

describe('DialogProductAddedComponent', () => {
  let component: DialogProductAddedComponent;
  let fixture: ComponentFixture<DialogProductAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProductAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogProductAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
