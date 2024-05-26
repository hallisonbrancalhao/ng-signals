import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnPushComponentComponent } from './components/on-push-component/on-push-component.component';
import { SignalService } from './signal.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, OnPushComponentComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {

  protected var$ = signal(1);
  protected showCount$ = signal(false);

  //Transforma o signal em um observable para ser usado no template
  protected toObservable$ = toObservable(this.var$)
  protected toSignal$ = toSignal(this.toObservable$)

  // (computed) reconhece dependencia de outro signal em "inscreve-se" para receber atualizações
  protected computed$ = computed(() => {
    // console.log("computing...");

    // Quando o valor showCount$() muda pra false, o computed$() não notificará mais o DOM
    if(this.showCount$())
      return `${this.var$()} - computed`
    else
      return 'not computed'
  });

  protectedmyObservable$ = this.signalService.couter;


  constructor(private signalService: SignalService) {
    // (effect): deve estar no construtor
    // identifica o signal usado (dependencia) e sempre que ele mudar, executa a função
    effect(() => {
      console.log('effect changed: ' + this.var$());
    });
  }

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

  change() {
    this.showCount$.update(curr => !curr);
  }
}
