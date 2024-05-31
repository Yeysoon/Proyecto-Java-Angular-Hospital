import { Component } from '@angular/core';
import { Pacientes } from './pacientes';
import { PacienteService } from './pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
})
export class FormPacientesComponent {

  public pacientes: Pacientes = new Pacientes()
    public titulo: string = "Crear Pacientes"
  
    constructor(private pacienteService: PacienteService,
      private router: Router,
      private activatedRoute: ActivatedRoute ){};
  
    ngOnInit(){
      this.cargarPaciente()
    }
  
  
    cargarPaciente():void{
      this.activatedRoute.params.subscribe(params =>{
        let id = params['id']
        if(id){
          this.pacienteService.getPaciente(id).subscribe((pacientes) => this.pacientes = pacientes) }
      })
    }
  
  
    public create():void{
      this.pacienteService.create(this.pacientes)
      .subscribe(pacientes => {
        this.router.navigate(['/pacientes'])
        swal.fire('Nuevo Paciente',`Paciente ${this.pacientes.nombrePaciente} creado con exito!`, 'success')
      }
      )
    }
  
    update(): void {
      this.pacienteService.update(this.pacientes)
      .subscribe(pacientes=>{
        this.router.navigate(['/pacientes'])
        swal.fire('Paciente Actualizado',`Pacientes ${pacientes.nombrePaciente} actualizado con exito!`,'success')
      })
    }


}
