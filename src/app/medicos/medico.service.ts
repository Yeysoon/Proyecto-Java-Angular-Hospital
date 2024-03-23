import { Injectable } from '@angular/core';
import { MEDICOS } from './medicos.json';
import { Medicos } from './medicos';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class MedicoService {

  constructor() { }

  getMedicos(): Observable<Medicos[]>{
    return of(MEDICOS);
  }
}
