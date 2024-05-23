import { Component } from '@angular/core';
import { NavbarTopComponent } from '../../shared/components/public/navbar-top/navbar-top.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarTopComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
