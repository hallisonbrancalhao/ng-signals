import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [],
  template: `
    <p>Input signal Label: {{ signal() }}/p>

    <button [disabled]="disabled()">Click me!</button>
  `
})
export class InputSignalComponent {
  signal = input.required<string>();
  disabled = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? value === '' || value === 'true' : value
  })
}
