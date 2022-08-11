import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
