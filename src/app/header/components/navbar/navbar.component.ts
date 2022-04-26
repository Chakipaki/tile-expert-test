import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    {
      title: 'Ссылки',
      list: []
    },
    {
      title: 'Контакты',
    },
    {
      title: 'Теги',
      list: []
    },
    {
      title: 'Просьбы',
      list: []
    },
    {
      title: 'Избраное',
      list: []
    },
    {
      title: 'Посещения',
      list: []
    }
  ]

  searchStatus = false

  handleSearch(): void {
    this.searchStatus = true
  }

  onSubmit(el: any): void {
    console.log(el)
    this.searchStatus = false
    console.log()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
