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


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    CustomMinDirective,
    InscripcionesCanceladasComponent,
    FiltrarPipe,

    BooleanPipe,
    FiltrarInscritosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  exports:[BooleanPipe]
})
export class TemplateModule { }
