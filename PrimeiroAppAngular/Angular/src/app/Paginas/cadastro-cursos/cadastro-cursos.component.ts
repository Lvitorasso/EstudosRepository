import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css']
})
export class CadastroCursosComponent {
  titulo = "Cadastro de cursos"

  cursos =[
    {id: 1, nome:'Development'},
    {id: 2, nome:'Art'},
    {id: 3, nome:'Lenguages'},
    {id: 4, nome:'Ciences'}
  ]



}
