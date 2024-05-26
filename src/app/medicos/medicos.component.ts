import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';
import { MedicoService } from './medico.service';
import swal from 'sweetalert2';
import { EspecialidadService } from '../especialidad/especialidad.service';
import { Especialidades } from '../especialidad/especialidades';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html'
})
export class MedicosComponent implements OnInit{

  medicos!: Medicos[];
  constructor(private medicoService: MedicoService, private especialidadesService: EspecialidadService) {  }

  especialidades! : Especialidades[];
  ngOnInit() {
    this.medicoService.getMedicos().subscribe(
      medicos => this.medicos = medicos
    );  

    this.especialidadesService.getEspecialidades().subscribe(
      data => this.especialidades = data
    );  

    console.log(this.especialidades)
  }

  delete(medico: Medicos): void{
     swal.fire({
      title: "Estás Seguro?",
      text: `Seguro que deseas eliminar al medico ${medico.nombreMedico}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.medicoService.delete(medico.idMedicos).subscribe(
          response =>{
            this.medicos = this.medicos.filter(med => med !== medico)

            swal.fire({
              title: 'Medico Eliminado!',
              text: `Medico ${medico.nombreMedico}  Eliminado con Exito`,
              icon: 'success'
        })
        })
      }
    });
  }
}
