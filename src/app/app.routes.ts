import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'AridentRIS-Ecommerce', component: ProductListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-items', component: ProductItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
