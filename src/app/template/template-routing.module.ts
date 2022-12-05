import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { InscripcionesCanceladasComponent } from './inscripciones_canceladas/inscripciones_cancel.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'inscripciones_canceladas', component: InscripcionesCanceladasComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class TemplateRoutingModule { }
