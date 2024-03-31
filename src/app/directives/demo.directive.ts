import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {
  private element: ElementRef<HTMLInputElement> = inject(ElementRef)
  
  constructor(private renderer: Renderer2) {
    console.log('DemoDirective')
    console.log(this.element)
    // this.element.nativeElement.style.backgroundColor = 'green'
    renderer.setStyle(this.element.nativeElement, 'background-color', 'green')
  }

}
