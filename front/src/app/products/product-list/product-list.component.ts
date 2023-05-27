import { Component } from '@angular/core'
import { ProductsService } from '../products.service'

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: any

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
}
