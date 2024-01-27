import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public getAuthToken() {
    return localStorage.getItem('auth');
  }

  public isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  public logout() {
    localStorage.removeItem('auth');
  }
}
