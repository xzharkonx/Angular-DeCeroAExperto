import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule, // Para trabajar con *ngIf o *ngFor
    FormsModule // Para trabajar con formularios.
  ],
  exports:[
    MainPageComponent
  ],
  providers: [ // Aqui van los servicios.
    DbzService
  ]
})
export class DbzModule { }
