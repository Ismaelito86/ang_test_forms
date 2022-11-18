import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  initForm = {
    nombre: 'RTX 4080ti',
    ci: '',
    genero: 'F',
    email: '',
    celular: null,
    categoria: '1',
    distrito: '1',
    provincia: '',
    presbiterio: '',
    matrimonio: true,
    hospedaje: true,
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

  emailValido(): boolean {
    return this.miFormulario?.controls.email?.invalid
            && this.miFormulario?.controls.email?.touched;
  }

  precioValido():boolean {
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0;
  }

  // guardar( miFormulario: NgForm ) {
  guardar() {
    // console.log( this.miFormulario );
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }
}
