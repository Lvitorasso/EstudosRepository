import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaSenhaFormComponent } from './troca-senha-form.component';

describe('TrocaSenhaFormComponent', () => {
  let component: TrocaSenhaFormComponent;
  let fixture: ComponentFixture<TrocaSenhaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaSenhaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaSenhaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
