import { Pipe, PipeTransform } from '@angular/core';
import { InscripcionesResponse } from '../interfaces';

@Pipe({
  name: 'filtrarInscritos'
})
export class FiltrarInscritosPipe implements PipeTransform {

  transform(value: InscripcionesResponse[], distritoId:string, provinciaId?:string, presbiterioId?:string): InscripcionesResponse[] {
    console.log(distritoId);
    let result:InscripcionesResponse[] =[];

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
