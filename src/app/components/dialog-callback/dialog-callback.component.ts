import { DialogRef } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-callback',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf],
  templateUrl: './dialog-callback.component.html',
  styleUrl: './dialog-callback.component.css'
})
export class DialogCallbackComponent implements OnInit{

  callback_form: FormGroup = new FormGroup({
    number: new FormControl(''),
  })

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.callback_form = this.fb.group({
      number: new FormControl('', [Validators.required,  Validators.pattern('^\\+7\\s?\\(?[0-9]{3}\\)?[\\s?-]?[0-9]{3}[\\s?-]?[0-9]{4}$')]),
    })
  }


  get number() {
    return this.callback_form.get('number');
  }

  getErrorMessage() {
    if (this.number?.hasError('required')) {
      return 'Введите номер телефона';
    }

    return 'Введите номер телефона в формате +7 (XXX) XXX-XXXX';
  }


  rejectNonNumeric(event: KeyboardEvent): void {
    if (event.key && !event.key.match(/^[0-9+\(\)\s]|Backspace$/)) {
      event.preventDefault();
    }
  }

}
