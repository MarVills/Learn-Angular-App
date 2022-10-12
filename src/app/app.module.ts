import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogOverviewExampleDialog, DashboardComponent } from './dashboard/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SolutionDetailDialog } from './dashboard/main-page.component';
import { HeaderVisibility } from './shared/header-visibility.service';
import { HandleTokenService } from './shared/handle-token.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { AuthGuardService } from './shared/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    DialogOverviewExampleDialog,
    LoginPageComponent,
    RegisterPageComponent,
    SolutionDetailDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    HeaderVisibility, 
    HandleTokenService,
    // AuthGuardService,
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
