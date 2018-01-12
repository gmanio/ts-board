import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditRouter } from './edit.routes';

@NgModule({
  imports: [
    CommonModule,
    EditRouter
  ],
  declarations: [EditComponent]
})
export class EditModule { }
