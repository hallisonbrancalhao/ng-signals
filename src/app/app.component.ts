import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {

  protected var$ = signal(1);

  // (computed) reconhece dependencia de outro signal em "inscreve-se" para receber atualizações
  protected computed$ = computed(() => `${this.var$()} - computed`);

  set() {
    // (set): define o signal para um valor absoluto
    // this.var$.set({
    //   name: 'Hallison Brancalhao',
    //   age: 25
    // });
  }

  update() {
    // (update): define signal com base no valor atual
    // exige que retorne todo o objeto

    // this.var$.update(curr => ({
    //   ...curr,
    //   name: curr.name + ' Brancalhao'
    // }));
  }

  compute() {
    // (compute): define valor para um signal com base em outro signal
    this.var$.update(curr => curr + 1);
  }
}
