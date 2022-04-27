import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {ActionsComponent} from "./components/actions/actions.component";
import {NavbarModule} from "./components/navbar/navbar.module";



@NgModule({
  declarations: [
    HeaderComponent,
    ActionsComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class HeaderModule { }
