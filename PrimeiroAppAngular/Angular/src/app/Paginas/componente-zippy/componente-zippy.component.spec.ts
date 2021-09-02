import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteZippyComponent } from './componente-zippy.component';

describe('ComponenteZippyComponent', () => {
  let component: ComponenteZippyComponent;
  let fixture: ComponentFixture<ComponenteZippyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteZippyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
