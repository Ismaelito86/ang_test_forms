import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Provincias{
  id: string;
  nombre: string;
  distritoId: string;
  provinciaId?: string;
}

export interface Presbiterios{
    id: string;
    nombre: string;
    distritoId: string;
    provinciaId?: string;
}

export interface Login {
  email:string,
  password:string
 }

 export interface LoginResponse{
  id?:string,
  username:string,
  isAdmin:boolean,
  distritoId?:string,
  provinciaId?:string,
  presbiterioId?:string,
  isEjecutivo?:boolean,
  isPresbitero?:boolean,
  isSecretario?:boolean,
  email:string,
  token:string
}

export interface Estadisticas {
  Total: string,
  Hombres: string,
  Mujeres: string,
  Matrimonios: string,
  Occidente: string,
  Centro_Oeste: string,
  Centro_Este: string,
  Oriente_Norte: string,
  Oriente_Sur: string,
}

export interface MinistroRequest{
  id?:string,
  nombre:string,
  ci:string,
  genero:string,
  email:string,
  celular:string,
  categoria:string,
  funciones:string,
  distrito:string,
  provincia:string,
  presbiterio:string,
  iglesia:string,
  matrimonio:boolean,
  hospedaje:boolean,
  ci_conyugue:string,
  softdelete:boolean,}

  export interface MinistroResponce{
    fieldCount:number,
    affectedRows:number,
    insertId:number,
    info:number,
    serverStatus:number,
    warningStatus:number,
  }

  export interface InscripcionesResponse {
    id:string,
    fecha:string,
    nombre:string,
    genero:string,
    ci:string,
    celular:string,
    email:string,
    categoria:string,
    categorias?:string,
    funciones?:string,
    iglesia?:string,
    matrimonio?:boolean,
    hospedaje?:boolean,
    funcion:string,
    distrito:string,
    distritoId?:string,
    provincia:string,
    provinciaId?:string,
    presbiterio:string,
    presbiterioId?:string,
    hospedajeId:string,
    isInscrito:boolean,
    isConfirmado:boolean|string|number,
    softdelete:boolean,
    ministroId:string,
  }
export interface updateInscripcionResponce {
  message: string,
​  ok: true
}

export interface hospedajesMatrimonios {
  id:string,
  fecha:string,
  isInscrito:string,
  hospedajeId:string,
  Id:string,
  nombre:string,
  ci:string,
  genero:string,
  email:string,
  celular:string,
  categoria:string,
  distrito:string,
  provincia:string,
  presbiterio:string,
  matrimonio:string,
  c_nombre?:string,
  c_ci?:string,
  c_genero?:string,
  c_email?:string,
  c_celular?:string,
  c_categoria?:string,
  c_Id?:string,
  distritoId:string,
  provinciaId:string,
  presbiterioId:string,
}

export interface hospedajesSinConyugue
{
  id:string,
  fecha:string,
  isInscrito:string,
  hospedajeId:string,
  Id:string,
  nombre:string,
  ci:string,
  genero:string,
  email:string,
  celular:string,
  matrimonio:string,
  hospedaje:string,
  categoria:string,
  distrito:string,
  provincia:string,
  presbiterio:string,
  distritoId:string,
  provinciaId:string,
  presbiterioId:string,
}

export interface updateMinistroResponse {
  ok:boolean,
  message:string
}
