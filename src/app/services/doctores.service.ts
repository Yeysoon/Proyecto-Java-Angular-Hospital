import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctores } from '../interfaces/doctores';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/doctores";

  getDoctores(): Observable<Doctores[]> {
    return this.http.get<Doctores[]>(this.api);
  }

  getDoctorById(id: number): Observable<Doctores> {
    return this.http.get<Doctores>(`${this.api}/${id}`);
  }

  createDoctor(doctores: Doctores): Observable<Doctores> {
    return this.http.post<Doctores>(this.api + "/create", doctores);
  }

  updateDoctor(doctores: Doctores): Observable<Doctores> {
    return this.http.put<Doctores>(this.api, doctores);
  }

  deleteDoctor(id: number): Observable<Doctores> {
    return this.http.delete<Doctores>(`${this.api}/${id}`);
  }

}
