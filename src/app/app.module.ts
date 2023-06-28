import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/layouts/info/info.component';
import { HeaderComponent } from './components/helpers/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';

@NgModule({
  declarations: [AppComponent, InfoComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
