export class Doctores {
    idDoctores?: number;
    nombreMedico!: string;

    especialidades!: {
        idEspecialidades: number;
        nombreEspecialidad: string;
    };

    licenciaMedica!: string;
    cargo!: string;
    turno!: string;
}