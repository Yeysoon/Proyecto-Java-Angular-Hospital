import { Component } from '@angular/core';
import { Doctores } from '../../interfaces/doctores';
import { Especialidades } from '../../interfaces/especialidades';
import { DoctoresService } from '../../services/doctores.service';
import { EspecialidadesService } from '../../services/especialidades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctores-edit',
  templateUrl: './doctores-edit.component.html',
  styleUrl: './doctores-edit.component.css'
})
export class DoctoresEditComponent {

  doctores: Doctores = {
    idDoctores: 0,
    nombreMedico: '',
    especialidades: {
      idEspecialidades: 0,
      nombreEspecialidad: "",
    },
    licenciaMedica: '',
    cargo: '',
    turno: ''
  }

  especialidades: Especialidades[] = [];

  constructor(private doctoresService: DoctoresService, private router: Router, private route: ActivatedRoute, private especialidadesService: EspecialidadesService) { }

  ngOnInit(): void {

    const id = + this.route.snapshot.paramMap.get('id')!;
    this.doctoresService.getDoctorById(id).subscribe(
      data => this.doctores = data
    );

    this.especialidadesService.getEspecialidades().subscribe(
      data => this.especialidades = data
    );

  }

  update(): void {
    this.doctoresService.updateDoctor(this.doctores).subscribe(() => {
      this.router.navigate(['/doctores']);
    })
  }

}
