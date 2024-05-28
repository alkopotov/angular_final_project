import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-callback',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './dialog-callback.component.html',
  styleUrl: './dialog-callback.component.css'
})
export class DialogCallbackComponent {

  callbackForm!: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.callbackForm = this.fb.group({
      phoneNumber: [+7, [
        Validators.required,
        Validators.pattern(/^\+7\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/)
      ]]
    });
  }

  get phoneNumber() {
    return this.callbackForm.get('phoneNumber');
  }

  onSubmit(): void {
    if (this.callbackForm.valid) {
      console.log('Форма отправлена', this.callbackForm.value);
    } else {
      console.log('Форма не валидна');
    }
  }

  formatPhoneNumber(): void {
    const input = this.phoneNumber?.value;

    if (input && !input.startsWith('+7')) {
      this.phoneNumber?.setValue('+7' + input);
    }
  }

}
