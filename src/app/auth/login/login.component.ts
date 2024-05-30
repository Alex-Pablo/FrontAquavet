import { Component } from '@angular/core';
import { NavbarTopComponent } from '../../shared/components/auth/navbar-top/navbar-top.component';
import { ReactiveFormsModule , FormBuilder, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarTopComponent, 
    ReactiveFormsModule, 
    NgIf,
    LoaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private sAuth: AuthService){}

  stateLogin:boolean = false;

  loginForm =  this.formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required] ],
  })


  onSubmit(){

    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return
    }

    Swal.fire({
      title:'',
      text: 'Espere por favor...'
    })
    Swal.showLoading();

    this.sAuth.login("hola", "123456")
      .subscribe((data) => {
        console.log(data);
        Swal.fire({
          title: "Iniciando session",
          text: "Autentificacion correcta",
          timer: 3000
        })
      })
  }



  getErrorMessage(formControl:string){
    const control  = this.loginForm.get(formControl);
    if (control?.hasError('required')) {
      return 'El campo es requerido'
    }
    else if (control?.hasError('email')){
      return 'Es necesario un correo electrónico'
    }
    return
  }

}
