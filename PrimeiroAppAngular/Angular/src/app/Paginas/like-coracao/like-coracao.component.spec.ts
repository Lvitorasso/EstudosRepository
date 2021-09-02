import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCoracaoComponent } from './like-coracao.component';

describe('LikeCoracaoComponent', () => {
  let component: LikeCoracaoComponent;
  let fixture: ComponentFixture<LikeCoracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCoracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
