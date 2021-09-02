import { AutoresService } from './autores.service';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})

export class AutoresComponent implements OnInit 
{
  title = "Autores";
  qtd = 0;
  autoresList: string[];

    constructor(service: AutoresService) 
    { 
      this.autoresList = service.getAutores();
      this.qtd = this.autoresList.length;

      this.autoresList.indexOf;
    }

    ngOnInit(): void 
    {
    }
}
