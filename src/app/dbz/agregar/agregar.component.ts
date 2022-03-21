// import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Component, Input} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Para emitir los datos, declaramos una interfaz del tipo de dato
  // que le vamos pasar o emitir al padre como si fuera un evento
  // que se dispara
  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  // Gracias a que ahora tenemos el arreglo de Personajes centralizado
  // en un Servicio, ya no es necesario estar cambiandolo y pasandolo
  // con solo que se cambie en el servicio cuando se invoquen sus métodos
  // bastará para que se actualice.
  // Para ello Inyectaremos el servicio.

  constructor(private dbzService: DbzService) { }


  // Forma Tediosa de hacer
  // agregar(event: any):void {
  //    event.preventDefault();
  //    console.log(event); // Se dispara el evento de submit del formulario.
  //    console.log('Hey!!!!');
  // }


  // Mira que ya no se captura el evento con ngSubmit
  agregar():void {

    if(this.nuevo.nombre.trim().length === 0){return;}
    


    // console.log('Esta es una prueba');
    console.log(this.nuevo);

    // Emmiter 

    // Emitimos de regreso el valor al componente padre.
    // En automatico pasamos ese valor a la función en
    // el html del componente padre.
    // Esa función tendrá que estar en el componente padre
    // y se será la que se ejecutará consecuente de que
    // invoquemos este método y le pasemos este valor.
    // this.onNuevoPersonaje.emit(this.nuevo);

    // Conclución de Output.
    // Declarar una interfaz Emmiter del tipo que vayamos a emitir
    // al invocar emmit(params) se disparará un método del componente
    // padre (que hayamos puesto en el html) y este a su vez le 
    // pasará toda la información.
    // Así todo se actualiza y la línea de abajo puede seguir 
    // ejecutandose normalmente

    // Servicio.
    // Llamamos al servicio que le pasamos por el constructor
    // para agregar a los personajes a la lista.
    this.dbzService.agregarPersonaje(this.nuevo);
    
    // Si ejecuta está línea también
    this.nuevo = {nombre:'',poder:0};
  }
  

}
