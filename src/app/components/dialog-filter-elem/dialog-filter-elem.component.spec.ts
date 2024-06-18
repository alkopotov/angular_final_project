import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFilterElemComponent } from './dialog-filter-elem.component';

describe('DialogFilterElemComponent', () => {
  let component: DialogFilterElemComponent;
  let fixture: ComponentFixture<DialogFilterElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFilterElemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFilterElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
