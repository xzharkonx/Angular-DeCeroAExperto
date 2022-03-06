import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-listado',
  templateUrl: './heroes-listado.component.html',
  // styleUrls: ['./heroes-listado.component.css']
})
export class HeroesListadoComponent {

  public heroes: string[] = ['Spiderman','Ironman', 'Hulk','Thor', 'Capitán América'] ;
  // public heroeBorrado: string = '...';
  public heroeBorrado: string|undefined = '';
  borrarHeroe(){
    // this.heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    // this.heroes.length > 0 ? console.log("Borrando a " + this.heroeBorrado) : console.log('Ya no hay heroes');
  }
}
