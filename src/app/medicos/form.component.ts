import { Component, OnInit } from '@angular/core';
import { Medicos } from './medicos';
import { MedicoService } from './medico.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public medicos: Medicos = new Medicos()
  public titulo: string = "Crear medico"

  constructor(private medicoService: MedicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute ){};

  ngOnInit(){
    this.cargarMedico()
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
  }
}
