import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private movieService: MovieService, private route: Router){ }

  key: string = ""

  search(){
    this.route.navigate(['/search'],{ queryParams: {k: this.key} })
    console.log(this.key)
  }


}
