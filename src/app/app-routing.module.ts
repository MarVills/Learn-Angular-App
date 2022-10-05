import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'login', component: FirstComponent },
  { path: 'register', component: SecondComponent },
  { path: 'dashboard', component: MainPageComponent },
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
