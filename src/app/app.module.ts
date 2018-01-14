import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { RootRouterModule } from './app.routes';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootRouterModule
  ],
  providers: [
    DataService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
