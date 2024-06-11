import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  mystring! : string

  constructor() {
    this.mystring = "toto"
  }

  changementDeValeur() {
    this.mystring = "ON S'EN TAPE DU LORE DE WOW !!!"
  }
  // get mystring() : string {
  //   return this._mystring
  // }

  // set mystring(value : string) {
  //   this._mystring = value
  // }
}
