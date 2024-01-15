import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PassCheckComplexService {
  constructor() { }

  checkComplexity(value: string) {
    let strength: number = 777;

    if (value.length === 0) {
      strength = 888;
    } else if (value.length < 8) {
      strength = 0;
    } else {
      let hasLetter: boolean = false;
      let hasDigit: boolean = false;
      let hasSymbol: boolean = false;

      for (let i = 0; i < value.length; i++) {
        let char = value.charAt(i);

        if (char >= 'a' && char <= 'z') {
          hasLetter = true;
        } else if (char >= '0' && char <= '9') {
          hasDigit = true;
        } else {
          hasSymbol = true;
        }
      }

      if (hasLetter && hasDigit && hasSymbol) {
        strength = 3;
      } else if (hasLetter && hasSymbol) {
        strength = 2;
      } else if (hasLetter && hasDigit) {
        strength = 2;
      } else if (hasDigit && hasSymbol) {
        strength = 2;
      } else {
        strength = 1;  
      }
    }

    return strength;
  }
}
