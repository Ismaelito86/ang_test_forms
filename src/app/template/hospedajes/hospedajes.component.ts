import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
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



  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
