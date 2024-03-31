import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})

export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, digitsInfo?: string): string {
    const localeCurrencySymbol = getLocaleCurrencySymbol('es-CO')!;
    const digits = digitsInfo ? digitsInfo : '.2-2';

    return formatCurrency(value, 'es-CO', localeCurrencySymbol, 'CO', digits);
  }
}
