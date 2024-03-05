import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'listado de personas';
  personas: Persona[] = [
    new Persona('Jordan Michael', 'Delgado Alonso'),
    new Persona('Ivonne Lilibeth', 'Delgado Alonso'),
  ];
  newName: string = '';
  newLastName: string = '';
 
  agregarPersona() {
    let p = new Persona(this.newName, this.newLastName);
    this.personas.push(p);
   
  }
  
}
