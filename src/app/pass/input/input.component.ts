import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPassValueService } from '../../services/input-pass-value-service.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
  <form [formGroup]="form">
   <input type="text" formControlName="value">
  </form>`
})
export class InputComponent implements ControlValueAccessor {

  form: FormGroup = this.fb.group({
    value: ''
  });

  val: any;
  onChange: any = () => { };
  onTouch: any = () => { };

  constructor(private inputPassValueService: InputPassValueService, private fb: FormBuilder) {
    this.form.valueChanges.subscribe(value => {
      this.inputPassValueService.setInputValue(value.value);
      this.onChange(value.value);
    });
  }

  set value(val: string) {
    this.inputPassValueService.setInputValue(val);
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue({ value: value }, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}