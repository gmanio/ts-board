import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRouter } from './result.routes';
import { ResultComponent } from './result.component';

@NgModule({
  imports: [
    CommonModule,
    ResultRouter
  ],
  declarations: [ResultComponent]
})
export class ResultModule {
}
