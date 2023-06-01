import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Order } from '../order.interface'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  public orders: Order[] = []
  public creditCardForm: FormGroup
  public totalPrice: number = 0

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the credit card form
    this.creditCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // Retrieve the orders from local storage
    const storedOrders = localStorage.getItem('cartItems')
    if (storedOrders) {
      this.orders = JSON.parse(storedOrders)

      // calculate total price of all orders
      const total = this.orders.reduce((total, order) => {
        return (total += order.product.price * order.quantity)
      }, 0)

      // set the total price to 2 decimal places
      this.totalPrice = Math.round(total * 100) / 100
    }
  }

  submitOrders() {
    localStorage.removeItem('cartItems')
    this.router.navigate(['/cart/success'])
  }

  removeFromCart(order: Order): void {
    // Remove the order from the cart array
    const index = this.orders.indexOf(order)
    if (index !== -1) {
      this.orders.splice(index, 1)
    }

    // Update the cart data in local storage
    localStorage.setItem('cart', JSON.stringify(this.orders))
  }
}
