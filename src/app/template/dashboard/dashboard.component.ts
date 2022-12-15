import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Estadisticas, LoginResponse } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit, OnDestroy {

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
  public hombres_solos: number = 0;
  public mujeres_solas: number = 0;
  public pinar_del_rio: number = 0;
  public artemisa: number = 0;
  public mayabeque: number = 0;
  public la_habana: number = 0;
  public matanzas: number = 0;
  public villa_clara: number = 0;
  public cienfuegos: number = 0;
  public sancti_spiritu: number = 0;
  public ciego_de_avila: number = 0;
  public camaguey: number = 0;
  public las_tunas: number = 0;
  public holguin: number = 0;
  public granma: number = 0;
  public santiago_de_cuba: number = 0;
  public guantanamo: number = 0;
  public isla_de_la_juventud: number = 0;
  private estadistica$: Subscription = new Subscription();
  token:string ='';

  user : LoginResponse;


  constructor(private inscripcionesService: InscripcionesService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.token = localStorage.getItem('xtoken')!;
    this.distrito = this.user.distritoId!;
    this.provincia = this.user.provinciaId || '';
    this.presbiterio = this.user.presbiterioId || '';
  }
  ngOnDestroy(): void {
    this.estadistica$.unsubscribe();
  }
  ngOnInit(): void {
    this.cargarEstadisticas();
  }

  cargarEstadisticas(){
    this.estadistica$ = this.inscripcionesService.getInscritosEstadisticas(this.token).subscribe({
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
        this.hombres_solos = parseInt(res[0].Hombres_solos);
        this.mujeres_solas = parseInt(res[0].Mujeres_solas);
        this.pinar_del_rio = parseInt(res[0].Pinar_del_Río);
        this.artemisa = parseInt(res[0].Artemisa);
        this.mayabeque = parseInt(res[0].Mayabeque);
        this.la_habana = parseInt(res[0].La_Habana);
        this.matanzas = parseInt(res[0].Matanzas);
        this.villa_clara = parseInt(res[0].Villa_Clara);
        this.cienfuegos = parseInt(res[0].Cienfuegos);
        this.sancti_spiritu = parseInt(res[0].Sancti_Spiritu);
        this.ciego_de_avila = parseInt(res[0].Ciego_de_Ávila);
        this.camaguey = parseInt(res[0].Camagüey);
        this.las_tunas = parseInt(res[0].Las_Tunas);
        this.holguin = parseInt(res[0].Holguín);
        this.granma = parseInt(res[0].Granma);
        this.santiago_de_cuba = parseInt(res[0].Santiago_de_Cuba);
        this.guantanamo = parseInt(res[0].Guantánamo);
        this.isla_de_la_juventud = parseInt(res[0].Isla_de_la_Juventud);
        console.log(res);
        this.isLoading = false;
      },
      error: (err) => console.log(err)
    });
  }

}
