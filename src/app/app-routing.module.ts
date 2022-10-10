import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { DashboardComponent } from './dashboard/main-page.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
