import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() name: string
  @Input() price: number
  @Input() category: string
  @Input() imageUrl: string

  constructor() {
    this.name = ''
    this.price = 0
    this.category = ''
    this.imageUrl = ''
  }

  quantityOptions = [1, 2, 3, 4, 5]

  addToCart() {
    // Logic to add the card to the cart
    console.log(`Adding xxx of xxx to the cart.`)
  }
}
