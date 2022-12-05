import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Login, LoginResponse } from 'src/app/template/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styles: [
  ]
})
export class LoginpageComponent implements OnInit {

  @ViewChild('miLoginFormulario') miFormulario!: NgForm;

  success = false;
  isLoading= false;

  loginForm: Login = {
    email: '',
    password:''
  };

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem('xtoken');
  }

  passwordValido(): boolean {
    return this.miFormulario?.controls.password?.invalid
            && this.miFormulario?.controls.producto?.touched;
  }

  emailValido(): boolean {
    return this.miFormulario?.controls.email?.invalid
            && this.miFormulario?.controls.email?.touched;
  }

  // guardar( miFormulario: NgForm ) {
  async guardar(){
    this.isLoading=true;
    console.log(this.loginForm);
    this.auth.loginService(this.loginForm).subscribe(
      (res: LoginResponse)=> {
        Swal.fire({
          title:'Bien!',
          text:'Credenciales Válidas.',
          icon:'success',
          buttonsStyling:true,
          confirmButtonColor:'#0d6efd' //#dc3545
        });
        console.log(res.token);
        const {token,...user} = res;
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('xtoken',res.token);
        this.success=true;
        this.isLoading=false;
        this.router.navigate(['/template/basicos']);
      },
    (error)=>{
      console.log(error);
      Swal.fire({
        title:'Error!',
        text:'Credenciales Inválidas.',
        icon:'error',
        buttonsStyling:true,
        confirmButtonColor:'#dc3545'
      });
    });


    // console.log( this.miFormulario );
    console.log('Posteo correcto');

  }
}
