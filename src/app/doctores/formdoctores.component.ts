import { Component, OnInit } from '@angular/core';
import { Doctores } from './doctores';
import { DoctorService } from './doctores.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { EspecialidadService } from '../especialidad/especialidad.service';

@Component({
  selector: 'app-formdoctores',
  templateUrl: './formdoctores.component.html',
  styleUrl: './formdoctores.component.css'
})
export class FormdoctoresComponent implements OnInit {

  public doctores: Doctores = new Doctores()
  public titulo: string = "Crear medico"


  constructor(private doctorService: DoctorService, private especialidadesService: EspecialidadService,
    private router: Router,
    private activatedRoute: ActivatedRoute ){};


    ngOnInit(){
      this.cargarDoctor()
    }

  cargarDoctor():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.doctorService.getDoctor(id).subscribe((doctores) => this.doctores = doctores) }
    })
  }

  public create():void{
    this.doctorService.create(this.doctores)
    .subscribe(doctores => {
      this.router.navigate(['/Doctores/add'])
      swal.fire('Nuevo Doctor',`Doctor ${this.doctores.nombreMedico} creado con exito!`, 'success')
    }
    )
  }

  update(): void {
    this.doctorService.update(this.doctores)
    .subscribe(doctores=>{
      this.router.navigate(['/Doctores'])
      swal.fire('Doctor Actualizado',`Doctores ${doctores.nombreMedico} actualizado con exito!`,'success')
    })
  }

}
