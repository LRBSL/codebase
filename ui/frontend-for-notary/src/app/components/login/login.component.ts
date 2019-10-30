import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.getCurrentUserState() == 'logged') {
      this.router.navigate(['/dashboard']);
    }
  }

  loginAction() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe((res: any) => {
      if(res != null) {
        localStorage.setItem('userState', 'logged');
        localStorage.setItem('userID', res.id);
        localStorage.setItem('userName', res.username);
        this.router.navigate(['/dashboard']);
      } else {
        alert("User credentials are not correct");
      }
    }, 
    (err) => {
      alert(err.message);
    });
  }

}
