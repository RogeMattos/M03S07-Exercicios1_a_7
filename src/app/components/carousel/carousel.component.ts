import { Component, ElementRef, EventEmitter, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  @Output() openModalFormulario: EventEmitter<any> = new EventEmitter();

  constructor() {}

  openModal() {
    this.openModalFormulario.emit();
  }
}








  
