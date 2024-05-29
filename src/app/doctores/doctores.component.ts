import { Component, OnInit } from '@angular/core';
import { Doctores } from './doctores';
import { DoctorService } from './doctores.service';
import swal from 'sweetalert2';
import { EspecialidadService } from '../especialidad/especialidad.service';
import { Especialidades } from '../especialidad/especialidades';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
})
export class DoctoresComponent implements OnInit{

  doctores! : Doctores[];
  especialidades! : Especialidades[];
  constructor(private doctorService: DoctorService, private especialidadService: EspecialidadService) {}

  ngOnInit() {
    this.doctorService.getDoctores().subscribe(
      doctores => this.doctores = this.doctores
    );  

    this.especialidadService.getEspecialidades().subscribe(
      data => this.especialidades = data
    );  

    console.log(this.especialidades)
  }

  
  delete(doctor: Doctores): void{
    swal.fire({
     title: "Estás Seguro?",
     text: `Seguro que deseas eliminar al doctor ${doctor.nombreMedico}`,
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Eliminar!",
     cancelButtonText: "Cancelar!",
     reverseButtons: true
   }).then((result) => {
     if (result.value) {

       this.doctorService.delete(doctor.idDoctores).subscribe(
         response =>{
           this.doctores = this.doctores.filter(doc => doc !== doctor)

           swal.fire({
             title: 'Doctor Eliminado!',
             text: `Doctor ${doctor.nombreMedico}  Eliminado con Exito`,
             icon: 'success'
       })
       })
     }
   });
 }

}
