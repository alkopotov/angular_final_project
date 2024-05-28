import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DevTypeService } from '../../../services/dev-type.service';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
  @Input() navItems: any[];

  public burgerIsActive: boolean = false;

  public toggleBurger(): void {
    this.burgerIsActive = !this.burgerIsActive;
  }

  public handleLinkClick(): void {
    this.burgerIsActive = false;
  }

  public DevType = inject(DevTypeService);

  ngOnInit(): void {
    this.DevType.getDevType();
  }
}
