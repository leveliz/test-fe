import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FlashsaleComponent } from './pages/flashsale/flashsale.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flash-sale',
    component: FlashsaleComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AppRoutingModule { }
