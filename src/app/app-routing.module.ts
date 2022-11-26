import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule )
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule ),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
