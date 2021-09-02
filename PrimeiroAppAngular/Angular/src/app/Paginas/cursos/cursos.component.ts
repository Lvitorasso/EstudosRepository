import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [{id: 1, nome:'Matemagica'},{id: 2, nome:'HTIML'},{id: 3, nome:'Ciencias'}]

  onAdicionar()
  {
    this.cursos.push({id: 4, nome:"Angular puta"})
  }

  onRemover(course: any){
    let index = this.cursos.indexOf(course);
    this.cursos.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
