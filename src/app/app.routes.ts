import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RefundPageComponent } from './pages/refund-page/refund-page.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { WarrantyPageComponent } from './pages/warranty-page/warranty-page.component';

export const routes: Routes = [ 
  { path: '', component: MainPageComponent },
  { path: 'returns', component: RefundPageComponent },
  { path: 'delivery', component: DeliveryPageComponent },
  { path: 'contacts', component:ContactsPageComponent },
  { path: 'warranty', component: WarrantyPageComponent },
  { path: '**', component: NotFoundPageComponent } 
];
