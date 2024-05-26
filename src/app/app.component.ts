import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {

  var$ = signal({
    name: "Hallison",
    age: 25
  });

  set() {
    // (set): define o signal para um valor absoluto
    this.var$.set({
      name: 'Hallison Brancalhao',
      age: 25
    });
  }

  update() {
    // (update): define signal com base no valor atual
    // exige que retorne todo o objeto

    this.var$.update(curr => ({
      ...curr,
      name: curr.name + ' Brancalhao'
    }));
  }
}
