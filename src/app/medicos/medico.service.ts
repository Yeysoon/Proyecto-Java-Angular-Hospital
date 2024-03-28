import { Injectable } from '@angular/core';
//import { MEDICOS } from './medicos.json';
import { Medicos } from './medicos';
import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
//import { response } from 'express';

@Injectable()
export class MedicoService {

  private urlEndPoint: string = 'http://localhost:8080/api/listarMedicos'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getMedicos(): Observable<Medicos[]>{
    //return of(MEDICOS);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Medicos[])
    );
  }

  create(medico: Medicos) : Observable<Medicos>{
    return this.http.post<Medicos>(this.urlEndPoint, medico, {headers: this.httpHeaders})
  }
}
