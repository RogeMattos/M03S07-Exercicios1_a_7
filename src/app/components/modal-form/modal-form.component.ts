import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  usuarioForm!: FormGroup;

  constructor(private activeModal: NgbActiveModal, private http: HttpClient) {}

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.usuarioForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      dataNascimento: new FormControl(''),
    });
  }

  enviar() {
    //Console.log(this.usuarioForm.value)--testa se o objeto está sendo montado corretamente--

    //url do endpoint a ser chamado
    const url = '';

     //construção do objeto para envio
    
    const body = {
      nomeUsuario: this.usuarioForm.value.nome,
      email: this.usuarioForm.value.email,
      dataNascimento: this.usuarioForm.value.dataNascimento
    }
    this.http.post(url, body).subscribe(retorno => {
      //rotina
      console.log(retorno);
    })
  }
  fecharModal() {
    this.closeModal?.emit();
  }

  //somente funciona quando a modal for aberta a partir do component
  fechar() {
    this.activeModal.close();
  }
}

