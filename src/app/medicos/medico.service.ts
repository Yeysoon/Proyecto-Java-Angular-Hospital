import { Injectable } from '@angular/core';
import { Medicos } from './medicos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class MedicoService {

  private baseUrl: string = 'http://localhost:8080/api/';
  private urlEndPoint: string = 'http://localhost:8080/api/medicos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<Medicos[]> {
    const url = this.baseUrl + 'listarMedicos'; // URL específica para listar médicos
    return this.http.get(url).pipe(
      map((response) => response as Medicos[])
    );
  }

  create(medico: Medicos): Observable<Medicos> {
    const url = this.baseUrl + 'guardarMedicos'; // URL específica para crear un médico
    return this.http.post<Medicos>(url, medico, {headers: this.httpHeaders});
  }

  getMedico(id:number): Observable<Medicos>{
    return this.http.get<Medicos>(`${this.urlEndPoint}/${id}`)
  }

  update(medico : Medicos): Observable<Medicos>{
    return this.http.put<Medicos>(`${this.urlEndPoint}/${medico.idMedicos}`,medico,{headers:this.httpHeaders})
  }

}
