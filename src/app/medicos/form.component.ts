import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';
import { MedicoService } from './medico.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { EspecialidadService } from '../especialidad/especialidad.service';
import { Especialidades } from '../especialidad/especialidades';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public medicos: Medicos = new Medicos()
  public titulo: string = "Crear medico"

  constructor(private medicoService: MedicoService, private especialidadesService: EspecialidadService,
    private router: Router,
    private activatedRoute: ActivatedRoute ){};

  especialidades : Especialidades[]=[];
  ngOnInit(){
    this.cargarMedico()
    this.especialidadesService.getEspecialidades().subscribe(
      data => this.especialidades = data
    );  
    
  }


  cargarMedico():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.medicoService.getMedico(id).subscribe((medicos) => this.medicos = medicos) }
    })
  }


  public create():void{
    this.medicoService.create(this.medicos)
    .subscribe(medicos => {
      this.router.navigate(['/medicos'])
      swal.fire('Nuevo Medico',`Medico ${this.medicos.nombreMedico} creado con exito!`, 'success')
    }
    )
    console.log(this.especialidades)
  }

  update(): void {
    this.medicoService.update(this.medicos)
    .subscribe(medicos=>{
      this.router.navigate(['/medicos'])
      swal.fire('Medico Actualizado',`Medicos ${medicos.nombreMedico} actualizado con exito!`,'success')
    })
  }
}
