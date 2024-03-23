import { Injectable } from '@angular/core';
import { MEDICOS } from './medicos.json';
import { Medicos } from './medicos';

@Injectable()
export class MedicoService {

  constructor() { }

  getMedicos(): Medicos[]{
    return MEDICOS;
  }
}
