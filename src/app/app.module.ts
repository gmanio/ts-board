import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

/**
 * angular services
 */
import { FirebaseService } from './services/firebase.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
/**
 * modules
 */
import { EditModule } from './containers/edit/edit.module';
import { ResultModule } from './containers/result/result.module';
/**
 * routers
 */
import { RootRouterModule } from './app.routes';
/**
 * components
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootRouterModule,
    EditModule,
    ResultModule
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
