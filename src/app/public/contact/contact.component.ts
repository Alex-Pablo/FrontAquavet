import { Component, OnInit } from '@angular/core';
import { NavbarTopComponent } from '../../shared/components/public/navbar-top/navbar-top.component';
import { BaseService } from '../../core/services/base-api.service';
import { IEmpresa } from '../../core/models/IEmpresa.interface';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarTopComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private SBase: BaseService){}

  public empresa?: IEmpresa

  ngOnInit(): void {
      this.getFirstOrDefaultEmpresa()
  }


  getFirstOrDefaultEmpresa(){
    this.SBase.getFirstOrDefault("Company/Company")
      .subscribe(data =>{
        if (data.isSucess) {
          this.empresa = data.value          
        }
      })
  }
  

}
