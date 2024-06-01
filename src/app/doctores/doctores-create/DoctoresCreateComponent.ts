import { Component, OnInit } from '@angular/core';
import { Doctores } from '../../interfaces/doctores';
import { Especialidades } from '../../interfaces/especialidades';
import { DoctoresService } from '../../services/doctores.service';
import { Router } from '@angular/router'; // Corrected import statement
import { EspecialidadesService } from '../../services/especialidades.service';

@Component({
    selector: 'app-doctores-create',
    templateUrl: './doctores-create.component.html',
    styleUrls: ['./doctores-create.component.css'] // Corrected to styleUrls
})
export class DoctoresCreateComponent implements OnInit { // Added OnInit implementation

    doctores: Doctores = {
        idDoctores: 0,
        nombreMedico: '',
        especialidades: {
            idEspecialidades: 0,
            nombreEspecialidad: '',
        },
        licenciaMedica: '',
        cargo: '',
        turno: ''
    };

    especialidades: Especialidades[] = [];

    constructor(
        private doctoresService: DoctoresService,
        private router: Router,
        private especialidadesService: EspecialidadesService
    ) { }

    ngOnInit(): void {
        this.especialidadesService.getEspecialidades().subscribe(
            data => this.especialidades = data
        );
    }

    save(): void {
        this.doctoresService.createDoctor(this.doctores).subscribe(() => {
            this.router.navigate(['/doctores'])
        })
    }
}
