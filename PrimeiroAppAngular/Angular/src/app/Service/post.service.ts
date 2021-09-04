import { BadRequestError } from './../Compartilhado/Erros/bad-request-error';
import { AppError } from './../Compartilhado/Erros/app-error';
import { NotFoundError } from './../Compartilhado/Erros/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable,throwError  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  private utl = 'https://localhost:5001/api/values/';

  constructor( private httpClient: HttpClient) { 

  }

  getPosts(){
    return this.httpClient.get(this.url).pipe(
      catchError((error: Response) => {      
        if(error.status == 404)
          return throwError(new NotFoundError(error.json())); 
        else if(error.status == 400)
          return throwError(new BadRequestError(error.json()));
        else          
          return throwError(new AppError(error.json()));
     }));
  }

  createPost(post: any)
  {
    return this.httpClient.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {     
        if(error.status == 404)
          return throwError(new NotFoundError(error.json())); 
        else if(error.status == 400)
          return throwError(new BadRequestError(error.json()));
        else          
          return throwError(new AppError(error.json()));
     }));
  }

  updatePost(post: any)
  {
    return this.httpClient.patch(this.url+'/'+post.id, JSON.stringify({isRead: true})).pipe(
      catchError((error: Response) => {      
        if(error.status == 404)
          return throwError(new NotFoundError(error.json())); 
        else if(error.status == 400)
          return throwError(new BadRequestError(error.json()));
        else          
          return throwError(new AppError(error.json()));
     }));
  }

  deletePost(id: any)
  {
    return this.httpClient.delete(this.url+'/'+id).pipe(
      catchError((error: Response) => {      
        if(error.status == 404)
          return throwError(new NotFoundError(error.json())); 
        else if(error.status == 400)
          return throwError(new BadRequestError(error.json()));
        else          
          return throwError(new AppError(error.json()));
     }));
  }


}
