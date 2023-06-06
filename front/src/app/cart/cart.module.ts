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
import { FormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'

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
    FormsModule,
    MatSelectModule,
  ],
})
export class CartModule {}
