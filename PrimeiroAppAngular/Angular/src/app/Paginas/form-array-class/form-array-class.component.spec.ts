import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayClassComponent } from './form-array-class.component';

describe('FormArrayClassComponent', () => {
  let component: FormArrayClassComponent;
  let fixture: ComponentFixture<FormArrayClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
