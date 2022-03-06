import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent {

    public nombre: string = 'Ironman';
    public edad: number = 45;
    
    // También tenemos dentro de las clases a los get y set.
    // Nota que no es un método es un getter, eso significa
    // que solo rebemos colocar el nombre de la función así
    // "nombreCapitalizado" para invocarla.
    // Simula que es una propiedad pero es un getter.
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
        // return this.nombre + this.edad.toString;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    
    cambiarEdad(): void {
        this.edad = 19;
    }

}