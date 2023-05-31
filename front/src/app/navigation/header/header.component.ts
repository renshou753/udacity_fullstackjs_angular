import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isLoggedIn: boolean = false

  redirectToLogin() {
    this.router.navigate(['/login'])
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }
}
