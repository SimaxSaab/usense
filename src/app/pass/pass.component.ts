import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component'
import { PassCheckComplexComponent } from './pass-check-complex/pass-check-complex.component'

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [FormsModule, CommonModule, InputComponent, PassCheckComplexComponent],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.scss'
})

export class PassComponent {
 
}