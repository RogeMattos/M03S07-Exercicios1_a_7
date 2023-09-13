import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) {}

  enviar() {}

  fecharModal() {
    this.closeModal?.emit();
  }

  //somente funciona quando a modal for aberta a partir do component
  fechar() {
    this.activeModal.close();
  }
}

