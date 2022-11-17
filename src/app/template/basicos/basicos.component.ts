import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  provincias = [
    {id:"1",name:"Pinar del Río",distritoId:"1" },
    {id:"2",name:"Artemisa",distritoId:"1"},
    {id:"3",name:"Mayabeque",distritoId:"1" },
    {id:"4",name:"La Habana",distritoId:"1" },
    {id:"5",name:"Matanzas",distritoId:"1"},
    {id:"16",name:"Isla de la Juventud",distritoId:"1"},
    {id:"6",name:"Villa Clara",distritoId:"2" },
    {id:"7",name:"Cienfuegos",distritoId:"2"},
    {id:"8",name:"Santiespiritu",distritoId:"2" },
    {id:"15",name:"Ciego de Ávila",distritoId:"3" },
    {id:"9",name:"Camagüey",distritoId:"3"},
    {id:"10",name:"Las Tunas",distritoId:"3"},
    {id:"11",name:"Holguín",distritoId:"4"},
    {id:"12",name:"Granma",distritoId:"4" },
    {id:"13",name:"Santiago de Cuba",distritoId:"5" },
    {id:"14",name:"Guantánamo",distritoId:"5" },
  ];

  initForm = {
    producto: 'RTX 4080ti',
    ci:'',
    genero: 'F',
    email:'',
    celular:null,
    categoria: '1',
    distrito:null,
    provincia:null,
    notificaciones: true,

    precio: 10,
    existencias: 10
  }




  terminosYCondiciones: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

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
