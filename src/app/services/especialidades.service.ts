import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidades } from '../interfaces/especialidades';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:8080/especialidades';

  getEspecialidades(): Observable<Especialidades[]> {
    return this.http.get<Especialidades[]>(this.api);
  }

  getEspecialidadById(id: string): Observable<Especialidades> {
    return this.http.get<Especialidades>(`${this.api}/${id}`);
  }
}
