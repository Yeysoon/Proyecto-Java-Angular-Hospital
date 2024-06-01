import { Injectable } from "@angular/core";
import { Especialidades } from '../interfaces/especialidades';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import { response } from "express";

@Injectable()
export class EspecialidadService {
    private baseUrl: string = 'http://localhost:8080/api/';
    private urlEndPoint: string = 'http://localhost:8080/api/especialidades';

    private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

    constructor(private http: HttpClient) { }

    getEspecialidades(): Observable<Especialidades[]> {
        const url = this.baseUrl + 'listarEspecialidades';
        return this.http.get(url).pipe(
            map((response) => response as Especialidades[])
        );
    }

    create(especialidad: Especialidades): Observable<Especialidades> {
        const url = this.baseUrl + 'guardarEspecialidades';
        return this.http.post<Especialidades>(url, especialidad, { headers: this.httpHeaders });
    }

    getEspecialidad(id: number): Observable<Especialidades> {
        return this.http.get<Especialidades>(`${this.urlEndPoint}/${id}`)
    }

    update(especialidad: Especialidades): Observable<Especialidades> {
        return this.http.put<Especialidades>(`${this.urlEndPoint}/${especialidad.idEspecialidad}`, especialidad, { headers: this.httpHeaders })
    }

    delete(idEspecialidad: number): Observable<Especialidades> {
        return this.http.delete<Especialidades>(`${this.urlEndPoint}/${idEspecialidad}`, { headers: this.httpHeaders })
    }

}