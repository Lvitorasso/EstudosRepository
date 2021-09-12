import { Observable, combineLatest } from 'rxjs';
import { GitHubService } from './../../Service/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  title = "Meus Seguidores"
  seguidores: any;

  constructor(private _route: ActivatedRoute, private service: GitHubService) { 
  }

  ngOnInit(): void {
    combineLatest([
      this._route.paramMap,
      this._route.queryParamMap
    ]).pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        
        return this.service.getAll();
      }))
      .subscribe((seguidores: any) => this.seguidores = seguidores);
  }
}
