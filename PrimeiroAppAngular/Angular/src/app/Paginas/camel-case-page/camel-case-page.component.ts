import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camel-case-page',
  templateUrl: './camel-case-page.component.html',
  styleUrls: ['./camel-case-page.component.css']
})
export class CamelCasePageComponent implements OnInit {

  title = "Pagina do exercicio camelCase";
  valorInput = "";

  constructor() { }

  ngOnInit(): void {
  }

}
