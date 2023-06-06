import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

import { Product } from '../product.interface'
import { Order } from '../../cart/order.interface'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() id: number
  @Input() name: string
  @Input() price: number
  @Input() category: string
  @Input() imageUrl: string

  // @Output decorator allows data to travel from child component to parent component
  @Output() addToCartEmitter: EventEmitter<Order> = new EventEmitter()

  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.id = 0
    this.name = ''
    this.price = 0
    this.category = ''
    this.imageUrl = ''
  }

  quantityOptions = [1, 2, 3, 4, 5]
  quantity = 0

  addToCart() {
    if (this.quantity === 0) {
      this.showSnackBar('please select a quantity')
      return
    }

    // Add the selected product to the cart
    const selectedProduct: Product = {
      id: this.id,
      name: this.name,
      price: this.price,
      imageUrl: this.imageUrl,
      category: this.category,
    }
    const order = { product: selectedProduct, quantity: this.quantity }

    this.addToCartEmitter.emit(order)

    this.showSnackBar('product added to shopping cart')
  }

  goToProductDetail() {
    this.router.navigate([`/productdetails/${this.id}`])
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds (3 seconds in this example)
    })
  }
}
