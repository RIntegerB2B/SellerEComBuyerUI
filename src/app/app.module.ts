import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BuyerRegistrationComponent } from './account/buyer-registration/buyer-registration.component';
import {AccountService} from './account/account.service';
import { BuyerHomeComponent } from './home/buyer-home/buyer-home.component';
import { BuyerSigninComponent } from './account/buyer-signin/buyer-signin.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { Routing } from './app.routes';
import { WelcomeComponent } from './home/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyerRegistrationComponent,
    BuyerHomeComponent,
    BuyerSigninComponent,
    HeaderComponent,
    NavHeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
