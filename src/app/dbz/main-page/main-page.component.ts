import { Component } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // El get se comportara como variable por lo
  // que personajes será como un arra que
  // solo devolverá lo que tiene al html.
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   console.log(argumento);
  //   this.personajes.push(argumento);
  // }

  // cambiarNombre(event:any):void {
  //   console.log(event.target.value);
  // }

  // Interfaz
  // Llamamos a nuestra interfaz de servicio inyectandola
  // en la main de nuestra app.

  // Esto se conoce como una inyección de dependencia,
  // donde el Objeto que le pasemos, será el que 
  // implemente la interfaz y sus métodos.
  constructor(private dbzService: DbzService){}

  // EL Objeto será de tipo Singleton y será un Objeto
  // centralizado donde cada cambio se reflejará en todas partes.
}
