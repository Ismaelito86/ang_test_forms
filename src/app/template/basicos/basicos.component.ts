import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';
import { presbiteriosData } from '../data/presbiterios';
import { provinciasData } from '../data/provincias';
import { Presbiterios, Provincias } from '../interfaces';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  success = false;

  initForm = {
    nombre: '',
    ci: '',
    genero: 'F',
    email: '',
    celular: '',
    categoria: '1',
    distrito: '1',
    provincia: '',
    presbiterio: '',
    matrimonio: true,
    hospedaje: false,
    ci_conyugue: '',

    precio: 10,
    existencias: 10
  };
  provincias: Provincias[] = provinciasData;
  presbiterios: Presbiterios[] = presbiteriosData;


  terminosYCondiciones = false;

  constructor() {
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

  // guardar( miFormulario: NgForm ) {
  async guardar(){
    this.success = true;
    await setTimeout(() => {
      this.success = false;
      this.miFormulario.resetForm({
        nombre: '',
      });
    }, 3000);


    // console.log( this.miFormulario );
    console.log('Posteo correcto');

  }
}
