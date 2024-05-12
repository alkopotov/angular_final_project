import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RefundPageComponent } from './pages/refund-page/refund-page.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';

export const routes: Routes = [ 
  { path: '', component: MainPageComponent },
  { path: 'returns', component: RefundPageComponent },
  { path: 'delivery', component: DeliveryPageComponent },
  { path: '**', component: NotFoundPageComponent } 
];
