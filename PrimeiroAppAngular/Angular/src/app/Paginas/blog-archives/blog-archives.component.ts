import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-archives',
  templateUrl: './blog-archives.component.html',
  styleUrls: ['./blog-archives.component.css']
})
export class BlogArchivesComponent implements OnInit {

  archives = [ 
    {id: 1, ano: '2017', mes: '1'},
    {id: 2, ano: '2017', mes: '2'},
    {id: 3, ano: '2017', mes: '3'},
    {id: 4, ano: '2017', mes: '4'} 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
