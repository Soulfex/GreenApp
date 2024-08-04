import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
  HeaderComponent,
  InicioComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[HeaderComponent, InicioComponent
  ]
})
export class SharedModule { }
