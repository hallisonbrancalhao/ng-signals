import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p> var: {{ this.var() }} </p>
  `,
})
export class OnPushComponentComponent {
  protected var = signal(1)

  constructor() {
    setInterval(() => {
      this.var.update(curr => curr + 1)
    }, 2000)
  }
}
