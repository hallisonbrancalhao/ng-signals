import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  #counter = signal('signal value');

  get couter () {
    return this.#counter.asReadonly();
  }
}
