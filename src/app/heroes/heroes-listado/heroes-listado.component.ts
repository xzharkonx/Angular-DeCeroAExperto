import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-listado',
  templateUrl: './heroes-listado.component.html',
  // styleUrls: ['./heroes-listado.component.css']
})
export class HeroesListadoComponent {

  public heroes: string[] = ['Spiderman','Ironman', 'Hulk','Thor', 'Capitán América','Lina','2','4'] ;
  // public heroeBorrado: string = '...';
  public heroeBorrado: string|undefined = '';
  // Mira que se pueden ocupar cualquiera de esos para indicar que no entrará en un If
  // public heroeBorrado: string|undefined|boolean|null|number = '' || undefined || false || null || 0;
  borrarHeroe(){
    // this.heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    // this.heroes.length > 0 ? console.log("Borrando a " + this.heroeBorrado) : console.log('Ya no hay heroes');
  }
}
