import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import Swal from 'sweetalert2';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { InscripcionesResponse, LoginResponse, Presbiterios, Provincias } from '../interfaces';

@Component({
  selector: 'app-inscripciones_cancel',
  templateUrl: './inscripciones_cancel.component.html',
  styles: [
  ]
})
export class InscripcionesCanceladasComponent implements OnInit{

  public inscritos: InscripcionesResponse[] = [];
  public isLoading = true;
  public distrito = '1';
  public provincia = '';
  public presbiterio = '';
  public buscar = '';
  public lengthFilter = 0;
  user : LoginResponse;

  provincias: Provincias[] = provinciasData;
  presbiterios: Presbiterios[] = presbiteriosData;

  constructor(private inscripcionesService: InscripcionesService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.distrito = this.user.distritoId!;
    this.provincia = this.user.provinciaId || '';
    this.presbiterio = this.user.presbiterioId || '';
  }
  ngOnInit(): void {
    this.cargarInscripcionesCanceladas();
  }

  cargarInscripcionesCanceladas(){
    return this.inscripcionesService.getInscripcionesCanceladas().subscribe({
      next: (res:InscripcionesResponse[]) => {
        this.inscritos = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

  test(name:string){console.log(name); }

  reInscripcion(inscrito:InscripcionesResponse){
    Swal.fire({
      title: 'ATENCION!',
      text: `Está seguro que desea reactivar la inscripcion de: ${inscrito.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        inscrito.isInscrito = true;
        this.inscripcionesService.updateInscripcion(inscrito).subscribe({
          next: (res)=> {
            console.log(res);
            this.router.navigateByUrl('template/dinamicos');
            Swal.fire(
              'OK!',
              res.message,
              'success'
            )

          },
          error:(err) =>{
            console.log(err);
            Swal.fire(
              'ERROR!',
              'Error de conexion! No se han realizado los cambios. Intentelo nuevamente. ',
              'error'
            )
          },
        });
      }
    })
  }


}
