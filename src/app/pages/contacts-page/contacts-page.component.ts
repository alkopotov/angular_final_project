import { Component } from '@angular/core';
import { SocialMediaBlockComponent } from '../../components/social-media-block/social-media-block.component';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [SocialMediaBlockComponent],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css'
})
export class ContactsPageComponent {

}
