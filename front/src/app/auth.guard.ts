import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('jwtToken')

    if (token) {
      // Check the validity of the token here
      // You can use a library like jwt-decode to decode and verify the token

      // If the token is valid, allow access to the route
      return true
    }

    // If the token is not present or invalid, redirect to the login page
    this.router.navigate(['/login'])
    return false
  }
}
