import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutComponent},
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
