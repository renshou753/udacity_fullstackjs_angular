import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const apiUrl = `${environment.apiUrl}/api/users/login` // Replace with the actual API URL
    // Create the request body
    const body = {
      id: username,
      password: password,
    }
    return this.http.post(apiUrl, body)
  }
}
