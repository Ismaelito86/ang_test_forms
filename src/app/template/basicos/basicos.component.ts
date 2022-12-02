import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { MinistroRequest, MinistroResponce, Presbiterios, Provincias } from '../interfaces';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  success = false;
  error = false;
  ciRegistrado=false;
  errorMesage='';
  isLoading=false;

  initForm: MinistroRequest = {
    nombre: '',
    ci: '',
    genero: 'F',
    email: '',
    celular: '',
    categoria: '1',
    funciones: '1',
    distrito: '1',
    provincia: '',
    presbiterio: '',
    iglesia: '',
    matrimonio: true,
    hospedaje: false,
    ci_conyugue: '',
    softdelete:false,
  };
  provincias: Provincias[] = provinciasData;
  presbiterios: Presbiterios[] = presbiteriosData;


  terminosYCondiciones = false;

  constructor(private router: Router, private formService: AuthService) {
  }


  ngOnInit(): void {}

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;
  }

  ciValido(): boolean {
    return this.miFormulario?.controls.ci?.invalid
            && this.miFormulario?.controls.ci?.touched;
  }
  ciConyugueValido(): boolean {
    return this.miFormulario?.controls.ci_conyugue?.invalid
            && this.miFormulario?.controls.ci_conyugue?.touched;
  }

  emailValido(): boolean {
    return this.miFormulario?.controls.email?.invalid
            && this.miFormulario?.controls.email?.touched;
  }

  celularValido(): boolean {
    return this.miFormulario?.controls.celular?.invalid
            && this.miFormulario?.controls.celular?.touched;
  }
  precioValido():boolean {
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0;
  }

  comprobar(){
    this.formService.checkCi(this.initForm.ci).subscribe(
      (res: any )=> {
        console.log(res.error.message);
        if (res.error.message==='Este # CI no se ha inscrito aún') {
          this.ciRegistrado=true;
          this.miFormulario.reset(
            {
              nombre: '',
              ci: '',
              genero: 'F',
              email: '',
              celular: '',
              categoria: '1',
              funciones: '1',
              distrito: '1',
              provincia: '',
              presbiterio: '',
              iglesia: '',
              matrimonio: true,
              hospedaje: false,
              ci_conyugue: '',
              softdelete:false,
            }
          );
        } else {
          this.ciRegistrado=false;
        }

      },
    (error)=>{
      //console.log(error);
      this.error=true;
    });
  }

  // guardar( miFormulario: NgForm ) {
  async guardar(){
    this.isLoading=true;
    this.formService.sendForm(this.initForm).subscribe(
      (res: MinistroResponce )=> {
        console.log(res.affectedRows);
        if (res.affectedRows===1) {
          Swal.fire({
            title:'Bien!',
            text:'El Ministro ha sido Inscrito Correctamente. Gracias',
            icon:'success',
            buttonsStyling:true,
            confirmButtonColor:'#0d6efd', //#dc3545
          });
          this.success=true;
          this.error=false;
          this.isLoading=false;
        } else {
          Swal.fire({
            title:'Error!',
            text:`Algo ha salido mal. ${this.errorMesage}
            Revice los datos e inténtelo de nuevo. Si el error persiste espere unos minutos. Gracias.`,
            icon:'error',
            buttonsStyling:true,
            denyButtonColor:'#dc3545',
            timer:5500
          });
          this.success=false;
          this.error=true;
        }
        this.miFormulario.reset(
          {
            nombre: '',
            ci: '',
            genero: 'F',
            email: '',
            celular: '',
            categoria: '1',
            funciones: '1',
            distrito: '1',
            provincia: '',
            presbiterio: '',
            iglesia: '',
            matrimonio: true,
            hospedaje: false,
            ci_conyugue: '',
            softdelete:false,
          }
        );
      },
    (error)=>{
      console.log(error.error.message);
      Swal.fire({
        title:'Error!',
        text:`Algo ha salido mal. ${this.errorMesage}
        Revice los datos e inténtelo de nuevo. Si el error persiste espere unos minutos. Gracias.`,
        icon:'error',
        buttonsStyling:true,
        denyButtonColor:'#dc3545',
        timer:5500
      });
      this.errorMesage = error.error.message;
      this.error=true;
      this.success=false;
      this.isLoading=false;
    });


    // console.log( this.miFormulario );
    console.log('Posteo correcto');

  }
  cerrarSession(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
