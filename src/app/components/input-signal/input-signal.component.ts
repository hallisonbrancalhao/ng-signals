import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [],
  template: `
    <p>Input signal Label: {{ signal() }}/p>

    <button [disabled]="disabled()" (click)="hasClicked">Click me!</button>
  `
})
export class InputSignalComponent {
  // PREVIOUSLY: @Input({ required: true }) signal: string = '';
  signal = input.required<string>();
  disabled = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? value === '' || value === 'true' : value
  })


  // PREVIOUSLY: @Output() hasClicked = new EventEmitter<string>();
  hasClicked = output<string>();
}
