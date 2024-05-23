import { Component } from '@angular/core';
import { NavbarTopComponent } from '../../shared/components/auth/navbar-top/navbar-top.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarTopComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
