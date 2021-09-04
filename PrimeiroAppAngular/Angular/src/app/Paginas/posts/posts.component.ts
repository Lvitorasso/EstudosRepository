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
    }, (error: Response) => {
      if(error.status == 404)
          alert('error');
    });
  }

  createPost(Input: HTMLInputElement)
  {
    let post = {title: Input.value}
    Input.value = '';

    this.service.createPost(JSON.stringify(post)).subscribe(response => {
 
      this.posts.splice(0,0, post)
      console.log(response)
    }, error => {alert('error');});
    
  }

  updatePost(post: any)
  {
    this.service.updatePost(post.id).subscribe(response => {
      console.log(response)
    }, error => {alert('error');});
    //this.httpClient.put(this.url, JSON.stringify(post));
  }
  
  deletePost(post: any)
  {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, (error: Response) => {
      if(error.status == 404)
          alert('This post has already been deleted');
      else
          alert('An unexpected error occur');
        });
    //this.httpClient.put(this.url, JSON.stringify(post));
  }

}
