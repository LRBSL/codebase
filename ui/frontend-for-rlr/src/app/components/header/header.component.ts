import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  isLoginRoute() {
    return this.router.url === '/login'
  }

  logout() {
    this.authService.logout();
  }

  getUserName() {
    let userName = localStorage.getItem('userName');
    if(userName != null) {
      return ': ' + userName.toUpperCase();
    }
    return;
  }

}
