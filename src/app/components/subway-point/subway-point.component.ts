import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subway-point',
  standalone: true,
  imports: [],
  templateUrl: './subway-point.component.html',
  styleUrl: './subway-point.component.css'
})
export class SubwayPointComponent {
  @Input() from: string;
  @Input() name: string;
}
