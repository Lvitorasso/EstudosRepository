import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './componente-zippy.component.html',
  styleUrls: ['./componente-zippy.component.css']
})
export class ComponenteZippyComponent {

  @Input('titulo') titulo = "Teste";
  
  @Input('valorContent') valorContent = "valorContent";
  estaExpandido = false;
  

  toggle()
  {
    this.estaExpandido = !this.estaExpandido;
  }


}
