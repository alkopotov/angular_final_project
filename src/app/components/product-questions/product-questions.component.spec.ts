import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsProductComponent } from './product-questions.component';

describe('QuestionsProductComponent', () => {
  let component: QuestionsProductComponent;
  let fixture: ComponentFixture<QuestionsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
