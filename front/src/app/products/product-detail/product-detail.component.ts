import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: '',
    category: '',
  }
  productId: string = ''
  quantityOptions = [1, 2, 3, 4, 5]
  quantity: number = 0

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')
    if (productId != null) {
      this.productId = productId
      this.getProduct()
    }
  }

  getProduct(): void {
    this.productService.getProduct(this.productId).subscribe((data) => {
      this.product = data
      this.product.imageUrl = `${environment.apiUrl}/${data.name}.png`
    })
  }

  addToCart() {
    if (this.quantity === 0) {
      this.showSnackBar('please select a quantity')
      return
    }

    // Logic to add the card to the cart
    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem('cartItems') as string) || []

    // Add the selected product to the cart
    const order = { product: this.product, quantity: this.quantity }
    existingCartItems.push(order)

    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems))

    this.showSnackBar('product added to shopping cart')
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds (3 seconds in this example)
    })
  }
}
