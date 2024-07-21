import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router, private auth: AuthService) {
    
  }

  logout() {
    this.auth.logout();
  }

  
}
