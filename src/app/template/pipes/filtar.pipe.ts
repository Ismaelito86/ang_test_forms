import { Pipe, PipeTransform } from '@angular/core';
import { Provincias, Presbiterios } from '../interfaces';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: Provincias[] | Presbiterios[], filter: string, field: string = 'distrito'): Provincias[] | Presbiterios[] {
    let result: Provincias[] | Presbiterios[] = [];
    if (filter === null || filter === ''){
      return value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    }

    if (field === 'distrito') {
      result = value.filter(n => n.distritoId === filter);
    } else {
      result = value.filter(n => n.provinciaId === filter);
    }
    return result;
  }

}
