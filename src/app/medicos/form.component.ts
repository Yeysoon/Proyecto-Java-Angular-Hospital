import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public medicos: Medicos = new Medicos()
  public titulo: string = "Crear medicos"

  constructor(){};

  ngOnInit(){
  }

  public create():void{
    console.log("Clicked!")
    console.log(this.medicos)
  }
}
