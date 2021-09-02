import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelCasePageComponent } from './camel-case-page.component';

describe('CamelCasePageComponent', () => {
  let component: CamelCasePageComponent;
  let fixture: ComponentFixture<CamelCasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamelCasePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelCasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
