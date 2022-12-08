import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';
import { FiltrarPipe } from './pipes/filtar.pipe';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { FiltrarInscritosPipe } from './pipes/filtrar-inscritos.pipe';
import { InscripcionesCanceladasComponent } from './inscripciones_canceladas/inscripciones_cancel.component';
import { BuscarNombresPipe } from './pipes/buscar-nombres.pipe';
import { HospedajesComponent } from './hospedajes/hospedajes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    CustomMinDirective,
    InscripcionesCanceladasComponent,
    HospedajesComponent,
    FiltrarPipe,

    BooleanPipe,
    FiltrarInscritosPipe,
    BuscarNombresPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TemplateRoutingModule
  ],
  exports:[BooleanPipe]
})
export class TemplateModule { }
