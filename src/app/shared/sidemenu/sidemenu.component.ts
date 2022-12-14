import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent {
  constructor(@Inject(DOCUMENT) private document: Document
  ) {}
  cerrarSession(){
    localStorage.removeItem('xtoken');
    localStorage.removeItem('user');
    //this.router.navigateByUrl('/auth/login');
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
