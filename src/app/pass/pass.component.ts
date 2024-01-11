import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.scss'
})

export class PassComponent {
  public password: string = '';
  public strength: number = 777;

  calculatePasswordStrength() {
    let strength: number;

    if (this.password.length === 0) {
      strength = 888;
    } else if (this.password.length < 8) {
      strength = 0;
    } else {
      let hasLetter: boolean = false;
      let hasDigit: boolean = false;
      let hasSymbol: boolean = false;

      for (let i = 0; i < this.password.length; i++) {
        let char = this.password.charAt(i);

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

    this.strength = strength;
  }
}