import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { ProductListComponent } from './products/product-list/product-list.component'
import { ProductDetailComponent } from './products/product-detail/product-detail.component'
import { LoginComponent } from './auth/login/login.component'
import { DisplayComponent } from './cart/display/display.component'
import { CartSuccessComponent } from './cart/cart-success/cart-success.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ProductListComponent, canActivate: [AuthGuard] },
  {
    path: 'productdetails/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: DisplayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart/success',
    component: CartSuccessComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [ProductListComponent]
