import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderElemComponent } from './components/header-elem/header-elem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderElemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apple_store';
}
