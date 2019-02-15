import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
//Para redireccionar 
import { Router } from '@angular/router';
//Messages
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public password:string;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _messages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this._authService.registerUser(this.email, this.password)
    .then((res)=> {
      this._messages.show('Usuario creado correctamente',
      {cssClass: 'alert-success', timeout: 4000});//Clase css y tiempo que queremos que se muestre
      this._router.navigate(['/privado']);
    }).catch((err)=>{
      this._messages.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});//Clase css y tiempo que queremos que se muestre
      this.email = null;
      this.password = null;
      //console.log(err);
    });
  }

}
