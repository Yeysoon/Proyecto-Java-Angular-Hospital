import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { FormPacientesComponent } from './pacientes/form-pacientes.component';
import { PacienteService } from './pacientes/pacientes.service';
import { Doctores } from './interfaces/doctores';
import { DoctoresListComponent } from './doctores/doctores-list/doctores-list.component';
import { DoctoresService } from './services/doctores.service';
import { DoctoresEditComponent } from './doctores/doctores-edit/doctores-edit.component';
import { DoctoresCreateComponent } from './doctores/doctores-create/doctores-create.component';
import { EspecialidadListComponent } from './doctores/especialidad-list/especialidadListComponent';


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
    FormPacientesComponent,
    DoctoresListComponent,
    DoctoresEditComponent,
    DoctoresCreateComponent,
    EspecialidadListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    MedicoService,
    EspecialidadService,
    PacienteService,
    DoctoresService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
