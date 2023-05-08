import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {
    /*const list = localStorage.getItem("THE_LIST")
    if(list!==null){
      this.myList = JSON.parse(list)
    }
    else{
    this.myList = [];
    }*/
  }

  myList: Movie[] = []

  add(m: Movie){
    //if(!this.myList.includes(m)) //includes con gli oggetti non funziona! (vuole una stringa, non un oggetto)
    if(!this.myList.find(el => el.id === m.id)){
      this.myList.push(m); 
      alert('Your movie has been added to Your List')
    }
    else{
      alert('This movie is already on Your List')
    }
  }

  getList(){
    return this.myList
  }


}
