import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'swims-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isXlScreen: boolean;
  username: string = '';
  password: string = '';
  loginFailedMessage = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.isXlScreen = window.innerWidth >= 1200;
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isXlScreen = width >= 1200;
  }

  login() {
    const encodedCredentials = window.btoa(this.username + ':' + this.password);
    localStorage.setItem('auth', encodedCredentials);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials
    });

    this.http.get('http://localhost:8080/api/public/test', { headers: headers, responseType: 'text' })
      .subscribe(
        data => {
          console.log('Login successful', data);
          this.loginFailedMessage = '';
          this.router.navigate(['/']);
        },
        error => {
          console.error('Login failed', error);
          localStorage.removeItem('auth');
          this.loginFailedMessage = "Login Failed";
          setTimeout(() => this.loginFailedMessage = "",2000)
        }
      );
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  islogged(){
    return this.authService.isLoggedIn();
  }
}
