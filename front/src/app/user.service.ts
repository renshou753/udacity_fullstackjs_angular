import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from './user.interface'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null)
  public user$: Observable<User | null> = this.userSubject.asObservable()

  setUser(user: User): void {
    this.userSubject.next(user)
  }

  clearUser(): void {
    this.userSubject.next(null)
  }

  clearLocalStorage(): void {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('user')
  }

  logout(): void {
    this.clearLocalStorage()
  }
}
