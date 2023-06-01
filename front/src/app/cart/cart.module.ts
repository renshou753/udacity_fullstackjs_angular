import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DisplayComponent } from './display/display.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { CartSuccessComponent } from './cart-success/cart-success.component'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [DisplayComponent, CartSuccessComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class CartModule {}
