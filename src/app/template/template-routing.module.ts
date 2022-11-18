import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class TemplateRoutingModule { }
