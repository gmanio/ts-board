import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RootRouterModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RootRouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
