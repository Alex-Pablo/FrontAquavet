import { Component, OnInit } from '@angular/core';

import { NavbarTopComponent } from '../../shared/components/public/navbar-top/navbar-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarTopComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(  ){}

  ngOnInit(){
  }


}
