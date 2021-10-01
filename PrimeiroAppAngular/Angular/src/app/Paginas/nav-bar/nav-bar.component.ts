import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbarLoja',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit 
{

  usuario = "Lucas";

  imagePath = 'C:\Users\Lucas\source\repos\Lvitorasso\EstudosRepository\PrimeiroAppAngular\Angular\src\app\images\brushlogo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
