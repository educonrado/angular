import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _messages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    return this._authService.loginEmail(this.email, this.password)
      .then((res) => {
        //console.log("Bienvenido");
        this._messages.show('Bienvenido',
          { cssClass: 'alert-success', timeout: 4000 });//Clase css y tiempo que queremos que se muestre
        this._router.navigate(['/privado']);
      }).catch((err) => {
        //console.log(err);
        this._messages.show(err.message,
          { cssClass: 'alert-danger', timeout: 4000 });//Clase css y tiempo que queremos que se muestre
        this._router.navigate(['/login']);
      })
  }

  onClickGoogleLogin() {
    this._authService.loginGoogle()
      .then((res) => {
        this._router.navigate(['/privado']);
      }).catch(err => console.log(err.messages));
  }

}
