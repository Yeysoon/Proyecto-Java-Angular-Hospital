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
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/medicos', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'medicos', component: MedicosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PacientesComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MedicoService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
