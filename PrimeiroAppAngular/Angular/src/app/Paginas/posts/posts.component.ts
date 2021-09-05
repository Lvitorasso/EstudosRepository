import { NotFoundError } from './../../Compartilhado/Erros/not-found-error';
import { BadRequestError } from './../../Compartilhado/Erros/bad-request-error';
import { AppError } from './../../Compartilhado/Erros/app-error';
import { PostService } from './../../Service/post.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent  {

posts: any;

  constructor(private service: PostService) { 
    this.service.getPosts().subscribe(response => {
     this.posts = response;
     console.log(response);
    }, (error: AppError) => {
      if(error instanceof BadRequestError)
        alert(error.originalError);
        else
          throw error;
    });
  }

  createPost(Input: HTMLInputElement)
  {
    let post = {title: Input.value}
    Input.value = '';

    this.service.createPost(JSON.stringify(post)).subscribe(response => {
 
      this.posts.splice(0,0, post)
      console.log(response)
    }, (error: AppError) => {
      if(error instanceof BadRequestError)
        alert(error.originalError);
      else
        throw error;        
    });
    
  }

  updatePost(post: any)
  {
    this.service.updatePost(post.id).subscribe(response => {
      console.log(response)
    });
    //this.httpClient.put(this.url, JSON.stringify(post));
  }
  
  deletePost(post: any)
  {
    this.service.deletePost(post)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }), (error: AppError) => {
      if(error instanceof BadRequestError)
        alert(error.originalError);
      else
        throw error;        
    };
    //this.httpClient.put(this.url, JSON.stringify(post));
  }

}
