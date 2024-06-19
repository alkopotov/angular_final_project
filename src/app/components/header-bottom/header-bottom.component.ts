import { Component, inject } from '@angular/core';
import { AirpodsComponent } from '../svg_components/airpods/airpods.component';
import { IPhoneComponent } from '../svg_components/iphone/iphone.component';
import { IPadComponent } from '../svg_components/ipad/ipad.component';
import { IWatchComponent } from '../svg_components/iwatch/iwatch.component';
import { LaptopComponent } from '../svg_components/laptop/laptop.component';
import { AccessoriesComponent } from '../svg_components/accessories/accessories.component';
import { ArrowRightComponent } from '../svg_components/arrow-right/arrow-right.component';
import { RouterLink } from '@angular/router';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';

@Component({
  selector: 'app-header-bottom',
  standalone: true,
  imports: [AirpodsComponent, IPhoneComponent, IPadComponent, IWatchComponent, LaptopComponent, AccessoriesComponent, ArrowRightComponent, RouterLink],
  templateUrl: './header-bottom.component.html',
  styleUrl: './header-bottom.component.css'
})
export class HeaderBottomComponent {
  public dialogService = inject(DialogDispatcherService);

}
