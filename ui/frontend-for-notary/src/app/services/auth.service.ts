import { Injectable } from '@angular/core';
import { HttpRequestResolverService } from './http-request-resolver.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private httpService: HttpRequestResolverService) { }

  getCurrentUserState() {
    return localStorage.getItem('userState');
  }

  login(username: string, password: string) {
    return this.httpService.realizarHttpPost('/api/auth', { username: username, password: password });
  }

  logout() {
    localStorage.setItem('userState', 'not logged');
    localStorage.removeItem('userID');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
