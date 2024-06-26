import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { ExoComponent } from './exo/exo.component';
import { Exo1Component } from './exo/exo1/exo1.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutComponent},
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
  ]},
  {path : "exo", component : ExoComponent, children : [
    {path : "exo1", component : Exo1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
