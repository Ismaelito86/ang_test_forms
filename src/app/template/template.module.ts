import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';
import { FiltrarPipe } from './pipes/filtar.pipe';


@NgModule({
  declarations: [
    BasicosComponent,

    CustomMinDirective,

    FiltrarPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
