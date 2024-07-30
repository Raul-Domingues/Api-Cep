import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoneComponent } from './form-done.component';

describe('FormDoneComponent', () => {
  let component: FormDoneComponent;
  let fixture: ComponentFixture<FormDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
