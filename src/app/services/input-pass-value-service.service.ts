import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputPassValueService {
  private inputValueSource = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSource.asObservable();

  setInputValue(value: string): void {
    this.inputValueSource.next(value);
  }
}
