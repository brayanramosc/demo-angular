import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  //imports: [],
  //templateUrl: './like.component.html',
  //styleUrl: './like.component.scss'
  template: `
    <div class="container">
      <img src="assets/corazon.png" alt="like">
    </div>
  `,
  styles: `.container {background-color: white}`
})
export class LikeComponent {

}
