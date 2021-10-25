import { TodoService } from './todo.service';
import { async, ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
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

  it('deve pegar do servidor', waitForAsync(() => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]))
    
    fixture.detectChanges();

    tick();
    
    expect(component.todos.length).toBe(3);

    // fixture.whenStable().then(() => {
    //   expect(component.todos.length).toBe(3);
    // })

  }));

  
});
