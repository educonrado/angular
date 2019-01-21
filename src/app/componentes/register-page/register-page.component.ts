import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public password:string;
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this._authService.registerUser(this.email, this.password)
    .then((res)=> {
      console.log("Bien!");
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
