import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRouter } from './list.routes';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ListRouter
  ],
  declarations: [ListComponent]
})
export class ListModule {
}
