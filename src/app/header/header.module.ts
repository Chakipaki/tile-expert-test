import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import { ActionsComponent } from './actions/actions.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ActionsComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HeaderModule { }
