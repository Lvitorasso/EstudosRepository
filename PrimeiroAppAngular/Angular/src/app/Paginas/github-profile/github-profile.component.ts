import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {   }

  submit()
  {
    this.route.navigate(['/followers'], {
      queryParams: {page : 1, order: 'newest'}
    });
  }

}
