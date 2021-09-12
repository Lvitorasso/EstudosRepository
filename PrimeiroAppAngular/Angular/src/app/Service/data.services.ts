import { BadRequestError } from './../Compartilhado/Erros/bad-request-error';
import { AppError } from './../Compartilhado/Erros/app-error';
import { NotFoundError } from './../Compartilhado/Erros/not-found-error';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';

export class DataService {

  constructor(private url: any, private httpClient: HttpClient) { 
  }

  getAll(){
    return this.httpClient.get(this.url).pipe(map((response: any) => response));
    // .pipe(catchError(this.handleError));
  }

  create(resource: any)
  {
    return this.httpClient.post(this.url, JSON.stringify(resource)).pipe(
      catchError(this.handleError));
  }

  update(resource: any)
  {
    return this.httpClient.patch(this.url+'/'+resource.id, JSON.stringify({isRead: true})).pipe(
      catchError(this.handleError));
  }

  delete(id: any)
  {
    return this.httpClient.delete(this.url+'/'+id).pipe(
      catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status == 404)
      return throwError(new NotFoundError(error.json())); 
    else if(error.status == 400)
      return throwError(new BadRequestError(error.json()));
    else          
      return throwError(new AppError(error.json()));
  }

}
