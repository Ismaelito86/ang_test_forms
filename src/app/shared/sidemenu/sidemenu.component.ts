import { Component } from '@angular/core';

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
    localStorage.removeItem('xtoken');
    localStorage.removeItem('user');
    //this.router.navigateByUrl('/auth/login');
  }
}
