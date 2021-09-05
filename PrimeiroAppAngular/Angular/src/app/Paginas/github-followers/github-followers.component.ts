import { GitHubService } from './../../Service/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  title = "Meus Seguidores"
  seguidores: any;

  constructor(private service: GitHubService) { 
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.seguidores = response);
  }
}
