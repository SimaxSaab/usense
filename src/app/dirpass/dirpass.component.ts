import { Component } from '@angular/core';
import { CheckpassDirective } from '../directives/checkpass.directive';

@Component({
  selector: 'app-dirpass',
  standalone: true,
  imports: [CheckpassDirective],
  templateUrl: './dirpass.component.html',
  styleUrl: './dirpass.component.scss'
})
export class DirpassComponent {

}
