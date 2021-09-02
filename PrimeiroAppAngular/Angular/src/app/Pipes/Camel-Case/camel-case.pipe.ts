import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(titulo: string) 
  {
    let words = titulo.split(' ');

    for(let i = 0; i < words.length; i++)
    {
      if(this.isPreposition(words[i]) && i != 0)
        words[i] = words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i]);
    }

    return words.join(' ');;
  }

  private toTitleCase(palavra: string): string
  {
    return palavra.substring(0,1).toUpperCase()+palavra.substr(1).toLowerCase();
  }

  private isPreposition(palavra: string)
  {
    let preposicoes = [ 'aboard', 'about', 'above', 'according to', 'across', 'after', 'against', 'ahead of', 'along', 'amid',
     'amidst', 'among', 'around', 'as', 'as far as', 'as of', 'aside from', 'at', 'athwart', 'atop',  'barring', 'because of', 
     'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'concerning', 'considering', 'despite',
     'down','during','except','excepting','excluding','following','for','from','in', 'inside','into','like','minus','near',
     'of','off','on','onto','opposite','outside','over','past','per','plus','regarding','round','save','since','the','than','through',
     'to','toward','towards','under','underneath','unlike','until','up','upon','versus','via','with','within','without'];

     return preposicoes.includes(palavra);
  }
}
