import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteRouter } from './infinite.routes';
import { InfiniteComponent } from './infinite.component';

@NgModule({
  imports: [
    CommonModule,
    InfiniteRouter
  ],
  declarations: [InfiniteComponent]
})
export class InfiniteModule {
}
