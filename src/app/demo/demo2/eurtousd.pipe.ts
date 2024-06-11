import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtousd'
})
export class EurtousdPipe implements PipeTransform {

  transform(value: number, currency : string): string {
    if(currency == 'USD')
      return 'USD ' + (value * 1.08).toFixed(2);
    if(currency == 'JPY')
      return 'YEN ' + Math.floor(value * 169);
    else {
      return 'Erreur, monnaie non prise en charge'
    }
  }

}
