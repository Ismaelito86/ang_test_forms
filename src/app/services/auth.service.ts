import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login, LoginResponse, MinistroRequest, MinistroResponce, updateMinistroResponse } from '../template/interfaces';

const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginService(body:Login):Observable<LoginResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<LoginResponse>(`${URL}/auth/login`, body,{headers})
  }

  sendForm(body:MinistroRequest, token:string):Observable<MinistroResponce>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    return this.http.post<MinistroResponce>(`${URL}/ministros`, body,{headers});
  }

  updateForm(body:MinistroRequest, token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    return this.http.patch<updateMinistroResponse>(`${URL}/ministros/${body.id}`, body,{headers});
  }

  checkCi(ci:string, token:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    return this.http.get<MinistroResponce>(`${URL}/ministros/ci/${ci}`,{headers});
  }
}

