import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyPipe } from './is-empty.pipe'; 

@NgModule({
  declarations: [
    IsEmptyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IsEmptyPipe,
  ]
})
export class PipesModule { }