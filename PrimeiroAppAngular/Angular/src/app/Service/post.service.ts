import { AppError } from '../Compartilhado/Erros/app-error';
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
    return this.httpClient.get(this.url);
  }

  createPost(post: any)
  {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any)
  {
    return this.httpClient.patch(this.url+'/'+post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id: any)
  {
    return this.httpClient.delete(this.url+'/'+id).pipe(
      catchError((error: Response) => {      
          return throwError(new AppError());       
     }));
  }


}
