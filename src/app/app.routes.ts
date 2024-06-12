import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RefundPageComponent } from './pages/refund-page/refund-page.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { WarrantyPageComponent } from './pages/warranty-page/warranty-page.component';
import { CreditPageComponent } from './pages/credit-page/credit-page.component';
import { AllProductsTestComponent } from './pages/all-products-test/all-products-test.component';
import { ProductCardTestComponent } from './pages/product-card-test/product-card-test.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';

export const routes: Routes = [ 
  { path: '', component: MainPageComponent },
  { path: 'returns', component: RefundPageComponent },
  { path: 'delivery', component: DeliveryPageComponent },
  { path: 'contacts', component:ContactsPageComponent },
  { path: 'warranty', component: WarrantyPageComponent },
  { path: 'credit', component: CreditPageComponent},
  { path: 'products/category/:id', component: ProductCategoryPageComponent},
  { path: 'test_all', component: AllProductsTestComponent },
  { path: 'test_all/:id', component: ProductCardTestComponent },
  { path: '**', component: NotFoundPageComponent }
];
