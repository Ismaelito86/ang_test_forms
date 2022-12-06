import { Pipe, PipeTransform } from '@angular/core';
import { InscripcionesResponse } from '../interfaces';

@Pipe({
  name: 'buscarNombres'
})
export class BuscarNombresPipe implements PipeTransform {

  transform(value: any[], query:string): any[]{
    let result:any[] =[];

    if (query ===""||query ===null||query ===undefined) {
      return value;
    }
    result = value.filter(f=>f.nombre.toUpperCase().includes(query.toUpperCase()));
    return result;
  }

}
