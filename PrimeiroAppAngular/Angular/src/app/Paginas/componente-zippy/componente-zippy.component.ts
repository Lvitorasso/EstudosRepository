import { Component,  Input } from '@angular/core';
import { animacaoZippy } from './componente-zippy.animations';

@Component({
  selector: 'zippy',
  templateUrl: './componente-zippy.component.html',
  styleUrls: ['./componente-zippy.component.css'],
  animations: [ animacaoZippy  ]
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
