import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';
import { MedicoService } from './medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public medicos: Medicos = new Medicos()
  public titulo: string = "Crear medicos"

  constructor(private medicoService: MedicoService,
    private router: Router){};

  ngOnInit(){
  }

  public create():void{
    this.medicoService.create(this.medicos).subscribe(
      response => this.router.navigate(['/medicos'])
    )
  }
}
