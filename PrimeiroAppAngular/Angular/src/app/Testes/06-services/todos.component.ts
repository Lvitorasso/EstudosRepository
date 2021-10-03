
import { TodoService } from './todo.service'
import { Observable, of, from, empty  } from 'rxjs' 

export class TodosComponent { 
  todos: any[] = [];
  message: any; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe((t: any) => this.todos = t);
  }

  add() { 
    var newTodo = { id: '... ' };

    this.service.add(newTodo).subscribe((resultado: any) => {
      this.todos.push(resultado)
    },  err => this.message = err);
  }

  delete(id: any) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
