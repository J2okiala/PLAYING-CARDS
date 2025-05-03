import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() search = 'initial';
  @Output() searchChange = new EventEmitter<String>();

  @Output('submit') searchButtonClicked = new EventEmitter();
  
  searchClick() {
    this.searchButtonClicked.emit();
    
  }

  updateSearch(value: String) {
    this.searchChange.emit(value);
  }

}
