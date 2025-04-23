import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})

export class IsEmptyPipe implements PipeTransform {

  transform(value: any): boolean {
    return value && Object.keys(value).length === 0;
  }

}