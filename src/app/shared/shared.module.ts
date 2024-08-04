import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
  HeaderComponent,
  InicioComponent,
  LoginComponent,
  MenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[HeaderComponent, InicioComponent
  ]
})
export class SharedModule { }
