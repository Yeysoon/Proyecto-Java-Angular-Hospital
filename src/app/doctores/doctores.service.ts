import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Doctores } from "./doctores";
import { map } from "rxjs";

@Injectable()
export class DoctorService{

    private baseUrl: string = 'http://localhost:8080/Doctores';
    private urlEndPoint: string = 'http://localhost:8080/Doctores/doctores';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    getDoctores(): Observable<Doctores[]>{
        const url = this.baseUrl + 'doctores'; // URL específica para listar doctores
        return this.http.get(url).pipe(
        map((response) => response as Doctores[])
    );
    }

    
    create(doctores: Doctores): Observable<Doctores> {
        const url = this.baseUrl + 'add'; // URL específica para crear un doctor
        return this.http.post<Doctores>(url, Doctores, {headers: this.httpHeaders});
    }

    
    getDoctor(id:number): Observable<Doctores>{
        return this.http.get<Doctores>(`${this.urlEndPoint}/${id}`)
    }

    update(doctores : Doctores): Observable<Doctores>{
        return this.http.put<Doctores>(`${this.urlEndPoint}/${doctores.idDoctores}`,doctores,{headers:this.httpHeaders})
    }

    delete(idDoctores: number): Observable<Doctores>{
        return this.http.delete<Doctores>(`${this.urlEndPoint}/${idDoctores}`,{headers:this.httpHeaders})
    }


}