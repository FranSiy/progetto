import { Component, Input } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private listService: ListService) {
    console.log(this.movies)
  }

  posterSize: string = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"

  movies = this.listService.getList()
  
  remove(key:any){
    console.log(key) //film cliccato
    const index = this.movies.indexOf(key, 0)
    if (index > -1){
      this.movies.splice(index,1)
      //localStorage.removeItem(JSON.stringify(key))
      
    }
    console.log(this.movies) //nuovo array
  }


}
