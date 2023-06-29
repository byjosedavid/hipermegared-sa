import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/layouts/info/info.component';
import { HeaderComponent } from './components/helpers/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { ZonaFormComponent } from './components/layouts/forms/zona-form/zona-form.component';
import { MercanciaFormComponent } from './components/layouts/forms/mercancia-form/mercancia-form.component';
import { MercanciasComponent } from './components/helpers/mercancias/mercancias.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    HomeComponent,
    ZonaFormComponent,
    MercanciaFormComponent,
    MercanciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
