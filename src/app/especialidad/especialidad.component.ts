import { Component, OnInit } from '@angular/core';
import { Especialidades } from '../interfaces/especialidades';
import { EspecialidadService } from './especialidad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrl: './especialidad.component.css'
})
export class EspecialidadComponent {

  especialidades!: Especialidades[];
  constructor(private especialidadService: EspecialidadService) { }

  ngOnInit() {
    this.especialidadService.getEspecialidades().subscribe(
      especialidades => this.especialidades = especialidades
    );
  }

  delete(especialidad: Especialidades): void {
    swal.fire({
      title: "Estás Seguro?",
      text: `Seguro que deseas eliminar la especialidad ${especialidad.nombreEspecialidad}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.especialidadService.delete(especialidad.idEspecialidad).subscribe(
          response => {
            this.especialidades = this.especialidades.filter(esp => esp !== especialidad)

            swal.fire({
              title: 'Especialidad Eliminada!',
              text: `Especialidad ${especialidad.nombreEspecialidad}  Eliminado con Exito`,
              icon: 'success'
            })
          })
      }
    });
  }
}
