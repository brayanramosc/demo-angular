import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true
})

export class OnlyTextDirective {
  // Se ocupa cuando se necesita más que el valor del elemento
  element: ElementRef<HTMLInputElement> = inject(ElementRef)
  ngControl = inject(NgControl, { optional: true })

  @HostListener("input", ["$event"]) onInput(event: Event) {
    const inputEl = event.target as HTMLInputElement
    console.log(inputEl.value)
    // Lo mismo que arriba, pero usando element. Si solo se ocupa el value, usar el de arriba
    // console.log(this.element.nativeElement.value)

    const value = inputEl.value
    const regex = /^[a-zA-Z\s]*$/

    if (!regex.test(value)) {
      this._setValue(inputEl)
    }
  }

  private _setValue(inputEl: HTMLInputElement) {
    const cleanVal = inputEl.value.replace(/[^a-zA-Z\s]/g, '')

    if (this.ngControl) {
      // Por si el input tiene un ngModel, este valor también se actualizará
      this.ngControl.control!.setValue(cleanVal)
    } else {
      inputEl.value = cleanVal
    }
  }

  constructor() { }

}
