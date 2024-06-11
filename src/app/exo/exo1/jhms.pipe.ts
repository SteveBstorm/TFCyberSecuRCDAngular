import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jhms'
})
export class JhmsPipe implements PipeTransform {

  transform(value: number): string {
    let jours = Math.floor(value / 86400)
    value = value - (jours * 86400)

    let heures = Math.floor(value / 3600)
    value = value - (heures * 3600)

    let minutes = Math.floor(value / 60)
    value = value - (minutes * 60)

    let secondes = value

    return `${jours < 10 ? '0' : ''}${jours} jour${jours < 2 ? '' : 's'}
            ${heures< 10 ? '0' : ''}${heures} heure${heures < 2 ? '' : 's'}
            ${minutes< 10 ? '0' : ''}${minutes} minute${minutes < 2 ? '' : 's'}
            ${secondes< 10 ? '0' : ''}${secondes} seconde${secondes < 2 ? '' : 's'}`
  }

}
