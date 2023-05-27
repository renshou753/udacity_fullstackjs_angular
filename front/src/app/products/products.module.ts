import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

import { ProductListComponent } from './product-list/product-list.component'
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [CommonModule, MatCardModule, MatGridListModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
