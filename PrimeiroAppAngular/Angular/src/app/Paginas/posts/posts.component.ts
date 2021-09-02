import { Component, Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent  {

posts: any;
private url = 'https://jsonplaceholder.typicode.com/posts';
private utl = 'https://localhost:5001/api/values/';

  constructor(private httpClient: HttpClient) { 
    httpClient.get(this.url).subscribe(response => {
     this.posts = response;
     console.log(response);
    });
  }

  createPost(Input: HTMLInputElement)
  {
    let post = {title: Input.value}
    Input.value = '';

    this.httpClient.post(this.url, JSON.stringify(post)).subscribe(response => {
 
      this.posts.splice(0,0, post)
      console.log(response)
    });
    
  }

  updatePost(post: any)
  {
    this.httpClient.patch(this.url+'/'+post.id, JSON.stringify({isRead: true})).subscribe(response => {
      console.log(response)
    });
    //this.httpClient.put(this.url, JSON.stringify(post));
  }
  
  deletePost(post: any)
  {
    this.httpClient.delete(this.url+'/'+post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
    //this.httpClient.put(this.url, JSON.stringify(post));
  }

}
