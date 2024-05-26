import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [],
  template: `
    <p>Input signal Label: {{ signal() }}/p>
  `
})
export class InputSignalComponent {
  signal = input('Input signal');
}
