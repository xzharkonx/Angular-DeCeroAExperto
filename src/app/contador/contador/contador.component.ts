import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo</h1>
        <h2>{{titulo}}</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <!-- <button (click)="numero = numero - 1;"> - 1</button> -->
        <!-- <button (click)="acumular(-1)"> - {{base}}</button> -->
        <button (click)="acumular(-base)"> - {{base}}</button>
        <!-- <button (click)="restarBase()"> - {{base}}</button> -->
        <span>{{numero}}</span>
        <!-- <button (click)="numero = numero + 1;"> + 1</button> -->
        <!-- <button (click)="sumar();"> + 1</button> -->
        <button (click)="acumular(base);"> + {{base}}</button>
        <!-- <button (click)="sumarBase();"> + {{base}}</button> -->
    `
})
export class ContadorComponent {

     // Es Opcional colocarle "public" y el tipo "string".
  // public titulo: string = 'Contador App';
  titulo: string = 'Contador App';
  numero: number = 10; 
  base: number = 10;

  sumar() {
    // this.numero +=1;
    this.numero ++;
    console.log(this.numero);
  }
  restar() {
    // this.numero -= 1;
    this.numero --;
    console.log(this.numero);
  }
  
  acumular(valor:number) {
    this.numero += valor;
  }

  sumarBase() {
    this.numero += this.base;
  }
  restarBase() {
    this.numero -= this.base;
  }

}