import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheaperFormComponent } from './dialog-cheaper-form.component';

describe('DialogCheaperFormComponent', () => {
  let component: DialogCheaperFormComponent;
  let fixture: ComponentFixture<DialogCheaperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCheaperFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCheaperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
