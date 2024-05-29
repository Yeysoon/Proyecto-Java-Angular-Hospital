import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoService } from './medicos/medico.service';
import { EspecialidadService } from './especialidad/especialidad.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './medicos/form.component';
import { FormsModule } from '@angular/forms';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { FormEspecialidadComponent } from './especialidad/formEspecialidad.component';
import { CommonModule } from '@angular/common';
import { DoctoresComponent } from './doctores/doctores.component';
import { FormdoctoresComponent } from './doctores/formdoctores.component';
import { DoctorService } from './doctores/doctores.service';



const routes: Routes = [
  {path: '', redirectTo: '/medicos', pathMatch: 'full'},
  {path: '', redirectTo: '/especialidades', pathMatch: 'full'},
  {path: '', redirectTo: '/doctores', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'medicos', component: MedicosComponent},
  {path: 'medicos/form', component: FormComponent},
  {path: 'medicos/form/:id', component: FormComponent},
  {path: 'especialidades', component:EspecialidadComponent},
  {path: 'especialidades/formEspecialidad', component: FormEspecialidadComponent},
  {path: 'especialidades/formEspecialidad/:id', component: FormEspecialidadComponent},
  {path: 'doctores', component: DoctoresComponent},
  {path: 'doctores/formdoctores', component: FormdoctoresComponent},
  {path: 'doctores/formdoctores/:id', component: FormdoctoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PacientesComponent,
    MedicosComponent,
    FormComponent,
    EspecialidadComponent,
    FormEspecialidadComponent,
    DoctoresComponent,
    FormdoctoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule 
  ],
  providers: [
    MedicoService,
    EspecialidadService,
    DoctorService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
