import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [AppComponent, LandingpageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withFetch()), provideOAuthClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
