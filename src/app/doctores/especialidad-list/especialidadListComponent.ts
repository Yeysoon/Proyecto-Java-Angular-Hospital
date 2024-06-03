import { Component, OnInit } from '@angular/core';
import { Especialidades } from '../../interfaces/especialidades';
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
    selector: 'app-especialidad-list',
    templateUrl: './especialidad-list.component.html',
    styleUrls: ['./especialidad-list.component.css']
})
export class EspecialidadListComponent implements OnInit {

    especialidades: Especialidades[] = [];

    constructor(private especialidadesService: EspecialidadesService) { }

    ngOnInit(): void {
        this.getEspecialidades();
    }

    getEspecialidades() {
        this.especialidadesService.getEspecialidades().subscribe((data: Especialidades[]) => {
            this.especialidades = data;
        });
    }
}
