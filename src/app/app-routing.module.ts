import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { MedicosComponent } from './medicos/medicos.component';
import { FormComponent } from './medicos/form.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { FormEspecialidadComponent } from './especialidad/formEspecialidad.component';
import { DoctoresListComponent } from './doctores/doctores-list/doctores-list.component';
import { DoctoresEditComponent } from './doctores/doctores-edit/doctores-edit.component';
import { EspecialidadListComponent } from './doctores/especialidad-list/especialidad-list.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormPacientesComponent } from './pacientes/form-pacientes.component';
import { DoctoresCreateComponent } from './doctores/doctores-create/doctores-create.component';

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '', redirectTo: '/medicos', pathMatch: 'full' },
  { path: '', redirectTo: '/especialidades', pathMatch: 'full' },
  { path: '', redirectTo: '/doctores', pathMatch: 'full' },
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },

  { path: 'medicos', component: MedicosComponent },
  { path: 'medicos/form', component: FormComponent },
  { path: 'medicos/form/:id', component: FormComponent },

  { path: 'especialidades', component: EspecialidadComponent },
  { path: 'especialidades/formEspecialidad', component: FormEspecialidadComponent },
  { path: 'especialidades/formEspecialidad/:id', component: FormEspecialidadComponent },

  { path: 'doctores', component: DoctoresListComponent },
  { path: 'doctores/create', component: DoctoresCreateComponent },
  { path: 'doctores/edit/:id', component: DoctoresEditComponent },
  { path: 'especialidades', component: EspecialidadListComponent },

  { path: 'pacientes', component: PacientesComponent },
  { path: 'pacientes/form-pacientes', component: FormPacientesComponent },
  { path: 'pacientes/form-pacientes/:id', component: FormPacientesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
