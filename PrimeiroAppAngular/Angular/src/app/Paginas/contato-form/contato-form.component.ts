import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  pessoa = {
    nome:  '',
    sobreNome: '',
    comentario:  ''
  }

  title = "Bem vindo";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
