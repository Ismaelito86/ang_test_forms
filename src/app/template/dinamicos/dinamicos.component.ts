import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import Swal from 'sweetalert2';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { InscripcionesResponse, LoginResponse, Presbiterios, Provincias } from '../interfaces';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit, OnDestroy{

  public inscritos: InscripcionesResponse[] = [];
  public isLoading = true;
  public distrito = '1';
  public provincia = '';
  public presbiterio = '';
  public buscar = '';
  public lengthFilter = 0;
  private inscripciones$: Subscription = new Subscription();
  private cancelarinscripciones$: Subscription = new Subscription();
  token:string ='';
  user : LoginResponse;

  provincias: Provincias[] = provinciasData;
  presbiterios: Presbiterios[] = presbiteriosData;

  constructor(private inscripcionesService: InscripcionesService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.token = localStorage.getItem('xtoken')!;
    this.distrito = this.user.distritoId!;
    this.provincia = this.user.provinciaId || '';
    this.presbiterio = this.user.presbiterioId || '';
  }
  ngOnDestroy(): void {
    this.inscripciones$.unsubscribe();
    this.cancelarinscripciones$.unsubscribe();
  }
  ngOnInit(): void {
    this.cargarInscripciones();
  }

  cargarInscripciones(){
    this.inscripciones$ = this.inscripcionesService.getInscritos(this.token).subscribe({
      next: (res:InscripcionesResponse[]) => {
        this.inscritos = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

  cancelarInscripcion(inscrito:InscripcionesResponse){
    Swal.fire({
      title: 'ATENCION!',
      text: `Est?? seguro que desea cancelar la inscripcion de: ${inscrito.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        inscrito.isInscrito = false;
        this.cancelarinscripciones$ = this.inscripcionesService.updateInscripcion(inscrito, this.token).subscribe({
          next: (res)=> {
            console.log(res);
            this.router.navigateByUrl('/dinamicos');
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
              'Error de conexion! No se han realizado los cambios. Intentelo nuevamente.',
              'error'
            )
          },
        });
      }
    })
  }

}
