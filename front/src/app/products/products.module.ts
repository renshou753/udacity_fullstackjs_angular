import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { ProductListComponent } from './product-list/product-list.component'
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
