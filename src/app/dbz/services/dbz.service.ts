import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interface";

// Esta será una clase que se podrá inyectar.
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
    
    constructor(){
        // console.log("Servicio Inicializado");
    }
    
    // Retornamos los personajes.
    get personajes(): Personaje[] {
        
        // Para retornarlos tenemos un problema porque 
        // JavaScript maneja Objetos por referencia
        // y puede ser un inconveniente porque puede ser
        // que este getter se pueda manipular
        // return this._personajes;
        
        // Asi rompemos la referencia con los valores de los arreglos
        // de nuestros personajes. Mediante el operador spread.
        // Separa cada uno de los elementos y crea uno nuevo.
        return [...this._personajes];
        
        // Esto es una buena práctica de JavaScript.
    }
    
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}