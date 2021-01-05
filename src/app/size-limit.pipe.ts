import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeLimit'
})
export class SizeLimitPipe implements PipeTransform {

  transform(value: string, end: number): string {
    if (value.length > end) {
      return `${value.slice(0, end).trim()}...`;
    } else {
      return value;
    }
  }

}
