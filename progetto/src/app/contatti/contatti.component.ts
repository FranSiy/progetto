import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {

  constructor(private route: Router) { }

  frm = { 
    email: "",
    oggetto: "",
    msg: "",
  }

  send(){
    alert("Your message has been sent!")
    return this.route.navigate(["/"])
  }

}
