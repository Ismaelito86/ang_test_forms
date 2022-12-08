import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { hospedajesMatrimonios, hospedajesSinConyugue, InscripcionesResponse, updateInscripcionResponce } from '../template/interfaces';


const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
@Output() emitInscritoToUpdate: EventEmitter<any> = new EventEmitter()
  constructor(private http:HttpClient) { }

  getInscritos(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<InscripcionesResponse[]>(`${URL}/inscripciones`, {headers});
  }

  getInscripcionesCanceladas(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<InscripcionesResponse[]>(`${URL}/inscripciones/canceladas`, {headers});
  }

  updateInscripcion(inscrito:InscripcionesResponse):Observable<updateInscripcionResponce>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<updateInscripcionResponce>(`${URL}/inscripciones/${inscrito.id}`, inscrito,{headers})
  }

  getHospedajes(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<hospedajesMatrimonios[]>(`${URL}/inscripciones/hospedajes_matrimonios`, {headers});
  }

  getHospedajesSinConyugue(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<hospedajesSinConyugue[]>(`${URL}/inscripciones/hospedajes`, {headers});
  }

  updateHospedaje(inscrito:hospedajesMatrimonios){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<any>(`${URL}/inscripciones/hospedajes/${inscrito.id}`, inscrito,{headers})
  }

}

