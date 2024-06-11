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
import { EurtousdPipe } from './demo/demo2/eurtousd.pipe';
import { ExoComponent } from './exo/exo.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { ToFarheneitPipe } from './exo/exo1/to-farheneit.pipe';
import { JhmsPipe } from './exo/exo1/jhms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    EurtousdPipe,
    ExoComponent,
    Exo1Component,
    ToFarheneitPipe,
    JhmsPipe
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
