import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DialogOverviewExampleDialog, MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ShowHideButtonServiceService } from './show-hide-button-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MainPageComponent,
    ForgotPasswordComponent,
    DialogOverviewExampleDialog,
    
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
  ],
  providers: [ShowHideButtonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
