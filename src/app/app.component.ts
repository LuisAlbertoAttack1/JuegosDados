import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juegos_dados';

//variables que recogen los valores
public valor1 : number = 0;
public valor2 : number = 0;
public valor3 : number = 0;
public resultado : string = "";


//Funcion para agregar un numero aleatorio
  public numeroAleatorio() : number {
    return Math.trunc(Math.random() * 6) + 1;
  }

//Constructor necesario
  public constructor() {
    this.valor1 = this.numeroAleatorio();
    this.valor2 = this.numeroAleatorio();
    this.valor3 = this.numeroAleatorio();
  }

//Funcion para poder tirar el dado
  public tirar() : void {
    this.valor1 = this.numeroAleatorio();
    this.valor2 = this.numeroAleatorio();
    this.valor3 = this.numeroAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Gano';
    } else {
      this.resultado = 'Perdio';
    }
  }

}
