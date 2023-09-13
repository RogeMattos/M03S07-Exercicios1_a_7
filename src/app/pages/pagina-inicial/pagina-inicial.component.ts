import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from 'src/app/components/modal-form/modal-form.component';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {

  @ViewChild('modalFormulario', {static: true}) modalFormulario: TemplateRef<any> | undefined;
  modalUploadRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) {}

  openModalFormularioPagInicial() {
    //abertura de modal passando a referencia do Template
    //this.modalUploadRef = this.modalService.open(this.modalFormulario);

    //abertura de modal passando a referencia do Componente
    this.modalUploadRef = this.modalService.open(ModalFormComponent);
  }

  closeModalpagInicial() {
    this.modalUploadRef?.close();
  }

}
