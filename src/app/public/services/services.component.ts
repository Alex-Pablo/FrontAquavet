import { Component } from '@angular/core';
import { NavbarTopComponent } from '../../shared/components/public/navbar-top/navbar-top.component';
import { ICategoriaServicios } from '../../core/models/ICategoriaServicios.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarTopComponent, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  categoriaServicios: ICategoriaServicios[] = [
    {
      iD_Categoria :'1',
      nombre:'Cirugias'
    },
    {
      iD_Categoria :'2',
      nombre:'Consultas'
    },
    {
      iD_Categoria: '3',
      nombre:'Vacunacion'
    },
    {
      iD_Categoria: '4',
      nombre:'Peluqueria'
    }
  ]
}
