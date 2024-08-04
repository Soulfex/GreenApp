import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { InicioComponent } from './shared/inicio/inicio.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  }
  ,
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
