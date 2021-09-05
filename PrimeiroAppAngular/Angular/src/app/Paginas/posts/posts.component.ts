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


export class PostsComponent implements OnInit {

  posts: any;

  ngOnInit(){
    this.service.getAll().subscribe(response => this.posts = response);
  }


  constructor(private service: PostService) { 
  }

  createPost(Input: HTMLInputElement)
  {
    let post = {title: Input.value}
    this.posts.splice(0,0, post)
    Input.value = '';

    this.service.create(JSON.stringify(post))
    .subscribe(
      (newPost: any) => { 
      post = newPost.id;
    }, 
    (error: AppError) => {

      this.posts.splice(0,1);

      if(error instanceof BadRequestError)
        alert(error.originalError);
      else
        throw error;        
    });
    
  }

  updatePost(post: any)
  {
    this.service.update(post.id)
    .subscribe(
      updatePost => {
      console.log(updatePost)
    });
    //this.httpClient.put(this.url, JSON.stringify(post));
  }
  
  deletePost(post: any)
  {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post)
    .subscribe(() => {    
      null  
    }, (error: AppError) => {   

      this.posts.splice(index, 0, post);

      if(error instanceof BadRequestError)
        alert(error.originalError);
      else
        throw error;        
    });
  }

}
