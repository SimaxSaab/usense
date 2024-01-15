import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPassValueService } from '../../services/input-pass-value-service.service';
import { PassCheckComplexService } from '../../services/pass-check-complex-service.service';

@Component({
  selector: 'app-pass-check-complex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pass-check-complex.component.html',
  styleUrl: './pass-check-complex.component.scss'
})
export class PassCheckComplexComponent {

  public strength: number = 9;
  public password: string = '';

  constructor(private passCheckComplexService: PassCheckComplexService, private inputPassValueService: InputPassValueService) {
  }

  ngOnInit(): void {
    this.inputPassValueService.inputValue$.subscribe(value => {
      this.password = value;
      this.strength = this.passCheckComplexService.checkComplexity(value);
    });
  }
}
