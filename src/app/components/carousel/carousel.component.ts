import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  enviarFormulario() {
    // Obtenha os valores dos campos de entrada
    const nome = this.el.nativeElement.querySelector('#InputNome').value;
    const email = this.el.nativeElement.querySelector('#InputEmail').value;
    const dataNascimento = this.el.nativeElement.querySelector('#InputDataNascimento').value;
    const feedback = this.el.nativeElement.querySelector('#FormControlTextarea').value;
    const nota = this.el.nativeElement.querySelector('#InputNota').value;

    // Verifique se algum campo está vazio
    if (!nome || !email || !dataNascimento || !feedback || !nota) {
      // Exiba um alerta se algum campo estiver vazio
      alert('Por favor, preencha todos os campos.');
    } else if (!this.validarEmail(email)) { // Note o uso do operador de negação (!) aqui
      // Verifique se o email é válido
      alert('Por favor, insira um endereço de email válido.');
    } else {
      // Se todos os campos estiverem preenchidos e o email for válido,
      // você pode executar a lógica de envio do formulário aqui
      alert('Formulário enviado com sucesso!');
    }
  }

  validarEmail(email: string): boolean {
    // Expressão regular para validar um email 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}








  
