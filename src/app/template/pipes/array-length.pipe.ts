import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLength'
})
export class ArrayLengthPipe implements PipeTransform {

  transform(value: any[]): number {
    return value.length;
  }

}
