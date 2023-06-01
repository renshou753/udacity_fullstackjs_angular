import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { UserService } from '../../user.service'
import { User } from '../../user.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup
  username: string = ''
  password: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('jwtToken', token)
  }

  saveUserToLocalStorage(user: string): void {
    localStorage.setItem('user', user)
  }

  parseJwt(token: string): User | null {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const decodedData = JSON.parse(atob(base64))
      return decodedData
    } catch (error) {
      console.error('Failed to parse JWT:', error)
      return null
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.username, this.password)
        .subscribe((response) => {
          // decode jwt token
          const user = this.parseJwt(response)

          if (user != null) {
            this.saveTokenToLocalStorage(response)
            this.saveUserToLocalStorage(user.username)
            this.userService.setUser(user as User)
            this.router.navigate(['/'])
          }
        })
    } else {
      // Handle invalid form submission
      this.loginForm.markAllAsTouched()
      return
    }
  }
}
