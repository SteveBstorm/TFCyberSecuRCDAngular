import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  mystring : string  = "jE suiS De MauVaise Humeur !!!"
  mynumber : number = 187.6752
  mydate : Date = new Date()
  myobject : any = {nom : "Steve", age : 40}

}
