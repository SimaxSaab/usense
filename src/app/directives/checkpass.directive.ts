import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckpass]',
  standalone: true
})
export class CheckpassDirective implements OnInit {
  private sections: HTMLElement[] = [];

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.sections = Array.from(document.querySelectorAll('.strength-section'));
  }

  @HostListener('input') onInput() {
    const value = this.el.nativeElement.value;

    // this.el.nativeElement.style.backgroundColor = 'red';
    if (!value) {
      this.updateColors('gray');
      return;
    }

    if (value.length < 8) {
      this.updateColors('red');
      return;
    }

    if (/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*.?":{}|<>]).*[0-9]/.test(value)) {
      this.updateColors('green');
      return;
    }

    if (/^(?:[0-9]+|[a-zA-Z]+|[^a-zA-Z0-9]+)$/.test(value)) {
      this.sections[0].style.backgroundColor = 'red';
      this.sections[1].style.backgroundColor = this.sections[2].style.backgroundColor = 'gray';
      return;
    }

    this.sections[2].style.backgroundColor = 'gray';
    this.sections[0].style.backgroundColor = this.sections[1].style.backgroundColor = 'yellow';
  }

  private updateColors(color: string) {
    this.sections.forEach(section => {
      section.style.backgroundColor = color;
    });
  }
}
