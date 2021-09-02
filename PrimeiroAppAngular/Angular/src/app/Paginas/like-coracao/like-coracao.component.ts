import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like-coracao',
  templateUrl: './like-coracao.component.html',
  styleUrls: ['./like-coracao.component.css']
})
export class LikeCoracaoComponent implements OnInit {

  @Input( 'body') corpo: any;
  @Input('eh-curtido') estaCurtido: any;
  @Input('qtd-curtidas') qtdCurtidas: any;
  

  onClick(){
    this.estaCurtido = !this.estaCurtido;
    this.qtdCurtidas += this.estaCurtido ? 1 : -1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
