import { NgModule } from '@angular/core';
import { NgStarComponent } from './ng-star.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgStarComponent],
  imports: [
    CommonModule
  ],
  exports: [NgStarComponent]
})
export class NgStarModule { }
