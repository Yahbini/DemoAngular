import { inject, Injectable } from '@angular/core';
import { Account } from '../entities/account.entity';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accounts: Account[];

  constructor(private router: Router) {}

  canActive(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('username')==null) {
        this.router.navigate(['/login'])
        return false;
    }
    return true;
  }
}

// dữ liệu chứng thực, kiểu dữ liệu CanActivateChildFn
// return true trả về đc route và ngược lại
export const AuthGuard: CanActivateChildFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
    // trả về AuthService lấy ra next và state trong canActive
    return inject(AuthService).canActive(next, state);
};

