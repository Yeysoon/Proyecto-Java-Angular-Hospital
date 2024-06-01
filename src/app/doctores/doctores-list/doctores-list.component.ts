import { Component } from '@angular/core';
import { Doctores } from '../../interfaces/doctores';
import { DoctoresService } from '../../services/doctores.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctores-list',
  templateUrl: './doctores-list.component.html',
  styleUrl: './doctores-list.component.css'
})
export class DoctoresListComponent {

  doctores: Doctores[] = [];

  constructor(private doctoresService: DoctoresService) { }

  ngOnInit(): void {
    this.getDoctores();
  }

  getDoctores(): void {
    this.doctoresService.getDoctores().subscribe((data: any) => {
      this.doctores = data;
    });
  }

  deleteCustomer(id: number): void {
    this.doctoresService.deleteDoctor(id).subscribe(() => {
      this.getDoctores(); // Refresca la lista de clientes después de eliminar
    });
  }


}
