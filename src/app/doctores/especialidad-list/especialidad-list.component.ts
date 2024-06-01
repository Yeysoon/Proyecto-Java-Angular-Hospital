import { Component } from '@angular/core';
import { Especialidades } from '../../interfaces/especialidades';
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
  selector: 'app-especialidad-list',
  templateUrl: './especialidad-list.component.html',
  styleUrl: './especialidad-list.component.css'
})
export class EspecialidadListComponent {

  especialidades: Especialidades[] = [];

  constructor(private especialidadesService: EspecialidadesService) { }

  ngOnInit(): void {
    this.getEspecialidades();
  }

  getEspecialidades() {
    this.especialidadesService.getEspecialidades().subscribe((data: any) => {
      this.especialidades = data;
    });
  }

}
