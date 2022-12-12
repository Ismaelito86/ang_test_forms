import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { InscripcionesCanceladasComponent } from './inscripciones_canceladas/inscripciones_cancel.component';
import { HospedajesComponent } from './hospedajes/hospedajes.component';
import { HospedajesGuard } from './hospedajes.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'inscripciones_canceladas', component: InscripcionesCanceladasComponent },
      { path: 'hospedajes', component: HospedajesComponent,canActivate:[HospedajesGuard], canLoad:[HospedajesGuard] },
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
