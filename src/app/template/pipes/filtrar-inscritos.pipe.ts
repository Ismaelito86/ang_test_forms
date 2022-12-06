import { Pipe, PipeTransform } from '@angular/core';
import { InscripcionesResponse } from '../interfaces';

@Pipe({
  name: 'filtrarInscritos'
})
export class FiltrarInscritosPipe implements PipeTransform {

  transform(value: any[], distritoId:string, provinciaId?:string, presbiterioId?:string): any[] {
    console.log(distritoId);
    let result:any[] =[];

    if (presbiterioId ==="" && provinciaId==="" && distritoId ==="") {
      return value.sort((a, b) => (a.distritoId! > b.distritoId!) ? 1 : -1);;
    }

    if (presbiterioId ==="" && provinciaId ==="" && distritoId !=="") {
      result = value.filter(q=>q.distritoId === distritoId);
      return result;
    }

    if (presbiterioId ==="" && provinciaId !=="" && distritoId !=="") {
      result = value.filter(q=>(q.distritoId === distritoId)&&(q.provinciaId === provinciaId));
      return result;
    }
    result = value.filter(q=>(q.distritoId === distritoId)&&(q.provinciaId === provinciaId)&&(q.presbiterioId === presbiterioId));
    return result;

  }

}
