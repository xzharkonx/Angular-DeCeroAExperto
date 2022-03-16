import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesListadoComponent } from "./heroes-listado/heroes-listado.component";

// Todo lo que definamos en las declaraciones estará invisible
// para toda la aplicación.
// Los exports indican que cosas quiero hacer publicas o visibles.
// En los imports, se importarán modulos (Objetos).
@NgModule({
    declarations: [
        HeroeComponent,
        HeroesListadoComponent
    ],
    exports: [
        HeroesListadoComponent
    ],
    imports: [
        CommonModule // Sirve para ofrecernos modúlos/librerías como el *ngFor o el *ngIf.
    ]

})
export class HeroesModule { }