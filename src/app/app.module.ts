import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    CarouselComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
   

  ],
  exports:[
    ModalFormComponent,
    CarouselComponent,
    PaginaInicialComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
