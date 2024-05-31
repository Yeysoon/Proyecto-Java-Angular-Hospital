import { Injectable } from '@angular/core';
import { Pacientes } from './pacientes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class PacienteService {

  private baseUrl: string = 'http://localhost:8080/api/';
  private urlEndPoint: string = 'http://localhost:8080/api/pacientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Pacientes[]> {
    const url = this.baseUrl + 'listarPacientes'; // URL específica para listar pacientes
    return this.http.get(url).pipe(
      map((response) => response as Pacientes[])
    );
  }

  create(paciente: Pacientes): Observable<Pacientes> {
    const url = this.baseUrl + 'guardarPacientes'; // URL específica para crear un pacientes
    return this.http.post<Pacientes>(url, paciente, {headers: this.httpHeaders});
  }

  getPaciente(id:number): Observable<Pacientes>{
    return this.http.get<Pacientes>(`${this.urlEndPoint}/${id}`)
  }

  update(paciente : Pacientes): Observable<Pacientes>{
    return this.http.put<Pacientes>(`${this.urlEndPoint}/${paciente.idPacientes}`,paciente,{headers:this.httpHeaders})
  }

  delete(idPacientes: number): Observable<Pacientes>{
    return this.http.delete<Pacientes>(`${this.urlEndPoint}/${idPacientes}`,{headers:this.httpHeaders})
  }

}