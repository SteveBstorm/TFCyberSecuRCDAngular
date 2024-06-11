import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
