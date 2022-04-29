import {Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  animations: [
    trigger('hideSearch', [
      state('start', style({
        width: '850px'
      })),
      state('end', style({
        width: '0'
      })),
      transition('start => end', [
        animate('5s')
      ]),
    ],),
  ]
})
export class SearchbarComponent implements OnInit {

  @Input() status: boolean = false
  animationStatus = 'end'
  additionalStatus = false

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: Form, log: any): void {
    this.status = false
    this.additionalStatus = false
  }

  onAdditional(e: FocusEvent): void {
    this.additionalStatus = true
  }


  clearSearchField(field: any):void {
    field.reset()
  }
}
