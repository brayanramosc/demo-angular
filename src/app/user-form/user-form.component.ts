import { Component } from '@angular/core';
import { OnlyTextDirective } from '../directives/only-text.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [OnlyTextDirective, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})

export class UserFormComponent {
  text = '';

  show(): void {
    console.log(this.text)
  }
}
