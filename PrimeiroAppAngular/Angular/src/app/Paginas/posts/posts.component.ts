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
    Input.value = '';

    this.service.create(JSON.stringify(post))
    .subscribe(newPost => { 
      this.posts.splice(0,0, post)
    }, (error: AppError) => {
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
    this.service.delete(post)
    .subscribe(() => {
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
