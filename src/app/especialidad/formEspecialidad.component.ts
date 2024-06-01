import { Component, OnInit } from "@angular/core";
import { Especialidades } from "../interfaces/especialidades";
import { EspecialidadService } from "./especialidad.service";
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formEspecialidad',
  templateUrl: './formEspecialidad.component.html'
})
export class FormEspecialidadComponent implements OnInit {

  public especialidades: Especialidades = new Especialidades()
  public titulo: string = "Crear Especialidades"

  constructor(private especialidadService: EspecialidadService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { };

  ngOnInit() {
    this.cargarEspecialidad()
  }


  cargarEspecialidad(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.especialidadService.getEspecialidad(id).subscribe((especialidades) => this.especialidades = especialidades)
      }
    })
  }


  public create(): void {
    this.especialidadService.create(this.especialidades)
      .subscribe(especialidades => {
        this.router.navigate(['/especialidades'])
        swal.fire('Nueva Especialidad', `Especialidad ${this.especialidades.nombreEspecialidad} creado con exito!`, 'success')
      }
      )
  }

  update(): void {
    this.especialidadService.update(this.especialidades)
      .subscribe(especialidades => {
        this.router.navigate(['/especialidades'])
        swal.fire('Especialidad Actualizada', `Especialidades ${especialidades.nombreEspecialidad} actualizado con exito!`, 'success')
      })
  }
}
