import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router) { }
   _ano: any = "";
   _mes: any = "";

  title = "Archive for";

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._ano = params.get('ano');
      this._mes = params.get('mes');
    });
     
    this._route.queryParamMap.subscribe();
  }
  
  goBack()
  {
    this.router.navigate(['/blog-archives']);
  }

}
