import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-callback-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './callback-modal.component.html',
  styleUrl: './callback-modal.component.css'
})



export class CallbackModalComponent {
  @Input() header: string;
	@Input() description: string;
	@Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
	private confirm() {
		this.isConfirmed.emit(true);
	}
	private close() {
		this.isConfirmed.emit(false);
	}

}
