import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarheneit'
})
export class ToFarheneitPipe implements PipeTransform {

  transform(value: number, unite: string): string {
    if(unite == 'cel') return ((value - 32) * 5/9).toFixed(2) + ' C°'
    if(unite == 'fah') return (value * 9/5 + 32).toFixed(2) + ' F°'
    return 'Unité non prise en charge'
  }

}
