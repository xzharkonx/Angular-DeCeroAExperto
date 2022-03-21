// import { Component, Input, OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private dbzService: DbzService) {
      
      dbzService.personajes[0].nombre += " Super Sayayin";
      dbzService.personajes.forEach(e => console.log(e.nombre));

   }

  // Con Input le decimos que la data la recibira a este
  // atributo por medio del input con el sobrenombre de 'data'
  // asi podemos indicarle en el selector con [data]="personajes"
  // que resibira la información de ese array que declaramos en 
  // main-page-component.ts
  // @Input('data')
  // @Input() // Quitamos el sobrenombre.
  // personajes: Personaje[] = [];

  // Ahora indicamos de mejor manera así.
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
}
