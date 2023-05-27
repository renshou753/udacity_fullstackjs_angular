import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // Add a method to fetch card data from the external API
  getProducts(): Observable<any> {
    const apiUrl = `${environment.apiUrl}/api/products` // Replace with the actual API URL
    return this.http.get(apiUrl)
  }
}
