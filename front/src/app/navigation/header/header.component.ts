import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../user.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false
  user: string | null = null

  constructor(private router: Router, private userService: UserService) {
    // Retrieve user data from local storage if available
    const userData = localStorage.getItem('user')
    if (userData) {
      this.user = userData
      this.isLoggedIn = true
    }
  }

  ngOnInit(): void {}

  redirectToLogin() {
    this.router.navigate(['/login'])
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }

  clickToLogout() {
    this.userService.logout()
    this.router.navigate(['/login'])
  }

  redirectToShoppingCart() {
    this.router.navigate(['/cart'])
  }
}
