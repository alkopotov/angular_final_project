import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: number;

  faStar= faStar;

  public getIntRating(): number {
    return Math.round(this.rating);
  }

}