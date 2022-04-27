import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() status: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any, field: any): void {
    this.status = false
    console.log(field)
  }

  clearSearchField(field: any):void {
    field.reset()
  }
}
