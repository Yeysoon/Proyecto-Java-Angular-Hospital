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

const routes: Routes = [
  {path: '', redirectTo: '/medicos', pathMatch: 'full'},
  {path: '', redirectTo: '/especialidades', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'medicos', component: MedicosComponent},
  {path: 'medicos/form', component: FormComponent},
  {path: 'medicos/form/:id', component: FormComponent},
  {path: 'especialidades', component:EspecialidadComponent},
  {path: 'especialidades/formEspecialidad', component: FormEspecialidadComponent},
  {path: 'especialidades/formEspecialidad/:id', component: FormComponent}
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
    FormEspecialidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MedicoService,
    EspecialidadService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
