import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Estadisticas, LoginResponse } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  public estadisticas: Estadisticas[] = [];
  public isLoading = true;
  public distrito = '1';
  public provincia = '';
  public presbiterio = '';
  public buscar = '';
  public lengthFilter = 0;

  public inscritos: number = 0;
  public occ: number = 0;
  public coeste: number = 0;
  public ceste: number = 0;
  public onorte: number = 0;
  public osur: number = 0;
  public matrimonio: number = 0;
  public hombres: number = 0;
  public mujeres: number = 0;

  token:string ='';

  user : LoginResponse;


  constructor(private inscripcionesService: InscripcionesService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.token = localStorage.getItem('xtoken')!;
    this.distrito = this.user.distritoId!;
    this.provincia = this.user.provinciaId || '';
    this.presbiterio = this.user.presbiterioId || '';
  }
  ngOnInit(): void {
    this.cargarEstadisticas();
  }

  cargarEstadisticas(){
    return this.inscripcionesService.getInscritosEstadisticas(this.token).subscribe({
      next: (res:Estadisticas[]) => {
        this.estadisticas = res;
        this.inscritos = parseInt(res[0].Total);
        this.occ = parseInt(res[0].Occidente);
        this.coeste = parseInt(res[0].Centro_Oeste);
        this.ceste = parseInt(res[0].Centro_Este);
        this.onorte = parseInt(res[0].Oriente_Norte);
        this.osur = parseInt(res[0].Oriente_Sur);
        this.matrimonio = parseInt(res[0].Matrimonios);
        this.hombres = parseInt(res[0].Hombres);
        this.mujeres = parseInt(res[0].Mujeres);
        console.log(res);
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

}
