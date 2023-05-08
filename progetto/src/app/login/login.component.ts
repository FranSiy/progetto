import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router) {
    
  }

  frm = { 
    user: "",
    email: "",
    password: "",
  };

  reg = { 
    user2: "",
    email2: "",
    password2: "",
    ripetiPass: "",
  };

  login(){
    alert("You are now logged in, Enjoy!")
    return this.route.navigate(["/"])
  }

  create(){
    if(this.reg.password2!=this.reg.ripetiPass){
      alert("Your password has to be confirmed !")
      return false
    }
    alert("Your account has been created, Enjoy!")
    return this.route.navigate(["/"])
  }
  
}
