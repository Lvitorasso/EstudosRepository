import { DataService } from './data.services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GitHubService extends DataService{
  constructor(httpClient: HttpClient) { 
     super('https://api.github.com/users/Lvitorasso/followers',httpClient)
  }
}
