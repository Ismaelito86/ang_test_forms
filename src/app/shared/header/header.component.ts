import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/template/interfaces';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class HeaderComponent {
  user : LoginResponse;
  constructor(@Inject(DOCUMENT) private document: Document,
  //private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  cerrarSession(){
    localStorage.removeItem('xtoken');
    localStorage.removeItem('user');
    //this.router.navigateByUrl('/auth/login');
  }
}
