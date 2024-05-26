import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>Input signal Label: {{ signal() }} </p>

    <input type="text" [(ngModel)]="inputValue" />

    <button [disabled]="disabled()" (click)="hasClicked">{{ inputValue() }}</button>
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

  // TWO-WAY BINDING
  // PREVIOUSLY: @Input() value: string = '';
  // PREVIOUSLY: @Output() valueChange = new EventEmitter<string>();
  inputValue = model<string>('Click me!');

}
