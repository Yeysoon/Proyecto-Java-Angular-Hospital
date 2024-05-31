import { Component } from '@angular/core';
import { Pacientes } from './pacientes';
import { PacienteService } from './pacientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  pacientes!: Pacientes[];
  constructor(private pacienteService: PacienteService){}

  ngOnInit(){
    this.pacienteService.getPacientes().subscribe(
      pacientes => this.pacientes = pacientes
    );
  }

  delete(paciente: Pacientes): void{
    swal.fire({
     title: "Estás Seguro?",
     text: `Seguro que deseas eliminar al paciente ${paciente.nombrePaciente}`,
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Eliminar!",
     cancelButtonText: "Cancelar!",
     reverseButtons: true
   }).then((result) => {
     if (result.value) {

       this.pacienteService.delete(paciente.idPacientes).subscribe(
         response =>{
           this.pacientes = this.pacientes.filter(esp => esp !== paciente)

           swal.fire({
             title: 'Paciente Eliminado!',
             text: `Paciente ${paciente.nombrePaciente}  Eliminado con Exito`,
             icon: 'success'
       })
       })
     }
   });
 }



}
