import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FirebaseService } from './services/firebase.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

import { RootRouterModule } from './app.routes';
import { AppComponent } from './app.component';

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
    FirebaseService,
    DataService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
