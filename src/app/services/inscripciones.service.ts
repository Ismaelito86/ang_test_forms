import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { hospedajeInscripciones, InscripcionesResponse, updateInscripcionResponce } from '../template/interfaces';


const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

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
    return this.http.get<hospedajeInscripciones[]>(`${URL}/inscripciones/hospedajes`, {headers});
  }
/*   loginService(body:Login):Observable<LoginResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<LoginResponse>(`${URL}/auth/login`, body,{headers})
  }

  sendForm(body:MinistroRequest):Observable<MinistroResponce>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<MinistroResponce>(`${URL}/ministros`, body,{headers});
  }

  checkCi(ci:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<MinistroResponce>(`${URL}/ministros/ci/${ci}`,{headers});
  } */
}

