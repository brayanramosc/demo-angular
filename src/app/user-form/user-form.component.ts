import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  inputMessage = 'Ingresa tus nombres';
  isButtonDisabled = true;

  handleChangeInput(event: Event): void {
    const inputEvent = event as InputEvent;
    console.log(inputEvent.target)
  }

  handleClickSave(): void {
    alert('¡Data guardada!')
  }

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }
}
