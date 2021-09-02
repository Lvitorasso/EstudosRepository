import { RouterTestingModule } from '@angular/router/testing';
import { Component, Injectable, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

@Injectable()
export class LikeComponent implements OnInit {
  titulo = "Bem vindo a pagina de likes!";
  @Output() change = new EventEmitter();
 

  quantidadeDeLike = 0;
  @Input('Favorito') ehFavorito: any;
  
  constructor() 
  { 
  }

  curtir(){

    // solução 1
    // if (this.ehFavorito){
    //   this.quantidadeDeLike -= 1;    
    //   this.ehFavorito = false;
    // }
    // else{
    //   this.quantidadeDeLike += 1;
    //   this.estaSelecionado = true;
    // }

    // solução 2
    this.quantidadeDeLike += (!this.ehFavorito) ? 1 : -1;
    this.ehFavorito = !this.ehFavorito;
    this.change.emit({newValue: this.ehFavorito});
  }

  somar(){
    this.quantidadeDeLike +=  1;
    if(this.quantidadeDeLike > 0)
      this.ehFavorito = true;
  }

  subtrair(){
    this.quantidadeDeLike += -1;
    if(this.quantidadeDeLike <= 0)
      this.ehFavorito = false;
  }

  ngOnInit(): void {
  }

}

export interface FavoritoEventArgs{
  newValue: Boolean
};
