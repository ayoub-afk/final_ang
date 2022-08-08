import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch:'full' },
  {path :'home', component:HomePageComponent},
  {path :'products', component:ProductsPageComponent},

  {path :'product/:id', component:ProductPageComponent},
  {path :'login', component:LoginPageComponent},
  {path :'register', component:RegisterPageComponent},
  {path :'cart', component:CartPageComponent},
  
  {path :'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }