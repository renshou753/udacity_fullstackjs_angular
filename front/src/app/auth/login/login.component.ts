import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

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
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('jwtToken', token)
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.username, this.password)
        .subscribe((response) => {
          // Handle successful login response
          this.saveTokenToLocalStorage(response)
        })
    } else {
      // Handle invalid form submission
      this.loginForm.markAllAsTouched()
      return
    }
  }
}
