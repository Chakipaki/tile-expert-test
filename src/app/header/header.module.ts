import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {ActionsComponent} from "./components/actions/actions.component";
import {NavbarModule} from "./components/navbar/navbar.module";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    ActionsComponent,
    SearchbarComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule
  ]
})
export class HeaderModule { }
