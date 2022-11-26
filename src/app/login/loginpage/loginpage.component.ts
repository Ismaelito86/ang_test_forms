import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Login, LoginResponse } from 'src/app/template/interfaces';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styles: [
  ]
})
export class LoginpageComponent implements OnInit {

  @ViewChild('miLoginFormulario') miFormulario!: NgForm;

  success = false;

  loginForm: Login = {
    email: '',
    password:''
  };

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
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
    console.log(this.loginForm);
    this.auth.loginService(this.loginForm).subscribe(
      (res: LoginResponse)=> {
        console.log(res.token);
        localStorage.setItem('token',res.token);
        this.success=true;
        this.router.navigate(['/template/basicos']);
      },
    (error)=>console.log(error));


    // console.log( this.miFormulario );
    console.log('Posteo correcto');

  }
}
