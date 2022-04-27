import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  onSubmit(form: any): void {
    this.status = false
  }
}
