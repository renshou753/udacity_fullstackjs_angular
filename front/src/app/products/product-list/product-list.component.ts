import { Component } from '@angular/core'
import { ProductsService } from '../products.service'
import { Product } from '../product.interface'
import { Order } from '../../cart/order.interface'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: Product[] = []

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data
      this.productList.forEach((element: { imageUrl: string; name: any }) => {
        element.imageUrl = `${environment.apiUrl}/${element.name}.png`
      })
    })
  }

  addToCartEmitter(order: Order): void {
    // Logic to add the card to the cart
    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem('cartItems') as string) || []

    existingCartItems.push(order)

    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems))
  }
}
