import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // nge route ke halaman child dari folder
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule)
  },
  // nge route ke halaman child dari folder
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then((mod) => mod.PublicModule)
  },
  // dibawah ini adalah halaman default
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
