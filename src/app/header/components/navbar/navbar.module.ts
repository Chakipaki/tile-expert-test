import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    NavbarComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
