import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = ''
  password: string = ''

  errorMsg: string = ''


  constructor(private authService: AuthService, private router: Router) {
  
  }

  login() {
    if(this.username.trim().length == 0) {
      this.errorMsg = 'Please enter a username'
    } else if(this.password.trim().length == 0) {
      this.errorMsg = 'Please enter a password'
    } else {
      this.errorMsg = ''
      var res: number = this.authService.login(this.username, this.password)
    
      res == 200 ? this.router.navigate(['home']) : this.errorMsg = 'Invalid username or password'
      
    }
  }
  

}
