import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


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
  cerrarSession(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //this.router.navigateByUrl('/auth/login');
  }
}
