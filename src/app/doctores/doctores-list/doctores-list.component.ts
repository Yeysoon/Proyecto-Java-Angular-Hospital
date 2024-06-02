import { Component, OnInit } from '@angular/core';
import { Doctores } from '../../interfaces/doctores';
import { DoctoresService } from '../../services/doctores.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctores-list',
  templateUrl: './doctores-list.component.html',
  styleUrls: ['./doctores-list.component.css']
})
export class DoctoresListComponent implements OnInit {

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
    swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctoresService.deleteDoctor(id).subscribe(() => {
          this.getDoctores(); // Refresca la lista de doctores después de eliminar
          swal.fire(
            'Eliminado',
            'El doctor ha sido eliminado',
            'success'
          );
        });
      }
    });
  }
}
