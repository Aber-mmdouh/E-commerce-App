import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
})
export class CubePipe implements PipeTransform {
  transform(value:number,pow:number): number {
    return Math.pow(value,pow)
  }
}
