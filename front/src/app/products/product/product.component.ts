import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() title: string
  @Input() content: string

  constructor() {
    this.title = ''
    this.content = ''
  }
}
