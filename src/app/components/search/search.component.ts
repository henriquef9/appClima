import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  location: string = '';

  @Output() searchEmitt = new EventEmitter<{nameLocation?: string, coords?: boolean}>()


  searchByNameCity(){
    this.searchEmitt.emit({nameLocation: this.location});
  }

  searchByCoordsUser(){
    this.searchEmitt.emit({coords: true})
  }
}
