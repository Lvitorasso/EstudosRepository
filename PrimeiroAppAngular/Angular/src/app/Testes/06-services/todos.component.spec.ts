import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, of, from, empty, throwError  } from 'rxjs'

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    service = new TodoService(spy);
    component = new TodosComponent(service);
  });

  it('deve setar a propriedade com os valores do servidor', () => {
  let todos: number[] = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('deve chamar o back e salvar quando um item é adicionado', () =>{
    let spy = spyOn(service, 'add').and.callFake(t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('deve adicionar o novo item retornado do servidor', () =>{
    let novoItem: any = {id: 1};
    let spy = spyOn(service, 'add').and.returnValue(of(novoItem));

    component.add();

    expect(component.todos.indexOf(novoItem)).toBeGreaterThan(-1);

  });

   it('deve salvar a mensagem em caso de erro', () =>{
     let error = 'erro do servidor';
     let spy = spyOn(service, 'add').and.returnValue(throwError(error));

     component.add();

     expect(component.message).toBe(error);

   });

   it('deve apagar se confirmado', () =>{
    spyOn(window, 'confirm').and.returnValue(true);    
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  it('NÃO deve apagar se NÃO confirmado', () =>{
    spyOn(window, 'confirm').and.returnValue(false);    
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith(1);

  });

});