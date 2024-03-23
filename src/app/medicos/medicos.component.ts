import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';
import { MedicoService } from './medico.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit{

  medicos: Medicos[] | undefined;
  constructor(private medicoService: MedicoService ) {  }

  ngOnInit() {
    this.medicoService.getMedicos().subscribe(
      medicos => this.medicos = medicos
    );  
  }

}
