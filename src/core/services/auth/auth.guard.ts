import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isloggedin()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  //   return this.authService.isloggedin().pipe(
  //       tap((authenticated) => {
  //         if (!authenticated) {
  //           this.router.navigate(['/login']);
  //         }
  //       })
  //   );
  }
}
