import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: any) {
    return this.http.post('...', todo).pipe(map((r: any) => r.json()));
  }

  getTodos() { 
    return this.http.get('...').pipe(map((r: any)  => r.json()));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map((r: any)  => r.json())).toPromise();
  }

  delete(id: any) {
    return this.http.delete('...').pipe(map((r: any)  => r.json()));
  }
}