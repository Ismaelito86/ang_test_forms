import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { MinistroRequest, MinistroResponce,  Presbiterios, Provincias, updateMinistroResponse } from '../interfaces';

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
  create=true;
  token:string = '';

  initForm: MinistroRequest = {
    id:'',
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

  constructor(private router: Router, private formService: AuthService, private routeParam: ActivatedRoute) {
  }


  ngOnInit() {
    this.token = localStorage.getItem('xtoken')!;
    this.routeParam.queryParams.subscribe({
      next: params => {
        if (params.ci) {
          console.log(params);
          console.log('si');
          this.create=false;
              this.initForm.id= params.ministroId;
              this.initForm.nombre= params.nombre;
              this.initForm.ci= params.ci;
              this.initForm.genero=params.genero;
              this.initForm.email=params.email;
              this.initForm.celular=params.celular;
              this.initForm.categoria=params.categorias;
              this.initForm.funciones=params.funciones;
              this.initForm.distrito=params.distritoId;
              this.initForm.provincia=params.provinciaId;
              this.initForm.presbiterio=params.presbiterioId;
              this.initForm.iglesia=params.iglesia;
              this.initForm.matrimonio=params.matrimonio;
              this.initForm.hospedaje=params.hospedaje;
              this.initForm.ci_conyugue=params.ci_conyugue;
              this.initForm.softdelete=params.softdelete;

        } else {
          console.log('no');
          this.create = true;
        }

      },
      error: err=>console.log(err)
    });

  }

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
  // guardar( miFormulario: NgForm ) {
  async guardar(){
    this.isLoading=true;
    this.formService.sendForm(this.initForm, this.token).subscribe(
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

  async update(){
    this.isLoading=true;
    this.formService.updateForm(this.initForm, this.token).subscribe(
      (res: updateMinistroResponse)=> {
        console.log(res);
        if (res.ok) {
          Swal.fire({
            title:'Bien!',
            text: res.message,
            icon:'success',
            buttonsStyling:true,
            confirmButtonColor:'#0d6efd', //#dc3545
          });
          this.success=true;
          this.error=false;
          this.isLoading=false;
          this.router.navigate(['template/basicos']);
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

  createOrUpdate(){
    if (this.create) {
      this.guardar();
    } else {
      this.update();
    }
  }
}
