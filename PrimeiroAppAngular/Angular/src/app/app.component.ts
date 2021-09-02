import { Component } from '@angular/core';
import { FavoritoEventArgs } from './Paginas/like/like.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular";

  post = {
    titulo: "titulo",
    ehFavorito: true
  }

  _tweet = {
    corpo: "Texto do tweet",
    estaCurtido: false,
    qtdCurtidas: 0
  }

  onFavoriteChange(eventArgs: FavoritoEventArgs){
    console.log("alterado", eventArgs);
  }

}
