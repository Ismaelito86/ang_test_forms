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
  distritoId?:boolean,
  provinciaId?:boolean,
  presbiterioId?:boolean,
  isEjecutivo?:boolean,
  isPresbitero?:boolean,
  email:string,
  token:string
}

export interface MinistroRequest{
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
