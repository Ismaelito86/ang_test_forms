import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginpageComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class LoginRoutingModule { }
