import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }

  public getUsername(): string {
    const encodedCredentials = localStorage.getItem('auth');
    if (!encodedCredentials) {
      return '';
    }

    const decodedCredentials = window.atob(encodedCredentials);
    const credentialsArray: string[] = decodedCredentials.split(':');

    if (credentialsArray.length !== 2) {
      return '';
    }

    return credentialsArray[0];
  }
}
