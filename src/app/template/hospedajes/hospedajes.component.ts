import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import Swal from 'sweetalert2';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { hospedajeInscripciones, LoginResponse, Presbiterios, Provincias } from '../interfaces';

@Component({
  selector: 'app-hospedajes',
  templateUrl: './hospedajes.component.html',
  styles: [
  ]
})
export class HospedajesComponent implements OnInit, OnDestroy {
  public inscritos: hospedajeInscripciones[] = [];
  public isLoading = true;
  public distrito = '1';
  public provincia = '';
  public presbiterio = '';
  public buscar = '';
  public lengthFilter = 0;

  suscription$: Subscription = new Subscription();

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
    this.cargarHospedajes();
  }

  cargarHospedajes(){
    this.inscripcionesService.getHospedajes().subscribe({
      next: (res:hospedajeInscripciones[]) => {
        this.inscritos = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

  async updateHospedajes(inscrito: hospedajeInscripciones){
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Dirección del hospedaje',
      inputPlaceholder: 'Escriba la dirección aquí...',
      inputAttributes: {
        'aria-label': 'Escriba la dirección aquí'
      },
      showCancelButton: true
    })

    if (text) {
      console.log(text);
      inscrito.hospedajeId = text;
      this.inscripcionesService.updateHospedaje(inscrito).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          Swal.fire(
            'OK!',
            res.message,
            'success'
          )
        },
        error: (err) => {
          Swal.fire(
            'ERROR!',
            'Error de conexion! No se han realizado los cambios. Intentelo nuevamente. ',
            'error'
          )
          console.log(err);}
      });
    }
  }

  quitarHospedajes(inscrito: hospedajeInscripciones){

      inscrito.hospedajeId = '';
      this.inscripcionesService.updateHospedaje(inscrito).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          Swal.fire(
            'OK!',
            res.message,
            'success'
          )
        },
        error: (err) => {
          Swal.fire(
            'ERROR!',
            'Error de conexion! No se han realizado los cambios. Intentelo nuevamente. ',
            'error'
          )
          console.log(err);}
      });
  }


  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
