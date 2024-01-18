import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the stored token (if any)
    const authToken = this.authService.getAuthToken();
    
    let authReq = req;
    // Attach the token if it exists
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Basic ${authToken}`)
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirect to the login page
          localStorage.removeItem('auth');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
