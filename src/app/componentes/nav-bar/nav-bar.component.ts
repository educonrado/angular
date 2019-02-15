import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.getAuth().subscribe(res => {
      if (res && res.uid) {
        this.isLogin= true;
        this.nombreUsuario = res.displayName;
        this.emailUsuario = res.email;
        this.fotoUsuario = res.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  onLogout(){
    this._authService.logout();
  }

}
