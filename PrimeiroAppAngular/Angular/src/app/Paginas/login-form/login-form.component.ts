import { TypeofExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  titulo = "Identificação";

  usuario = {
    login: '',
    senha: ''
  }

  usuarioNovo = {
    email: '',
    senhaUsuarioNovo: '',
    senhaConfirmUsuarioNovo: '',
    cpfCnpj: '',
    cep: ''
  }

  enviar(variavelForm: any)
  {
    console.log(variavelForm.value)  
  }

  logar(x: any)
  {
    
    console.log(x)  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
