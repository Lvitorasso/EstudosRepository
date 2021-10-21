import { TodoService } from './todo.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve pegar do servidor', () => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodos').and.returnValue(of([1, 2, 3]))
    
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  
});
